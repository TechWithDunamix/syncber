import { requireSupabase } from "./supabase";
import type { ApiResponse } from "./api";

export interface AuthSession {
  userId: string;
  email: string;
  name: string;
  loggedInAt: string;
}

const SESSION_CACHE_KEY = "skillber_session_cache";

function cacheSession(session: AuthSession): void {
  try {
    localStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(session));
  } catch {}
}

function clearSessionCache(): void {
  try {
    localStorage.removeItem(SESSION_CACHE_KEY);
  } catch {}
}

function readSessionCache(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_CACHE_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

export async function signup(
  name: string,
  email: string,
  password: string
): Promise<ApiResponse<AuthSession>> {
  const sb = requireSupabase();
  const { data: authData, error: signUpError } = await sb.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (signUpError) {
    return { success: false, error: signUpError.message };
  }

  const user = authData.user;
  if (!user) {
    return { success: false, error: "Signup failed. Please try again." };
  }

  if (!authData.session) {
    return {
      success: false,
      error: "Check your email for a confirmation link before logging in.",
    };
  }

  const session: AuthSession = {
    userId: user.id,
    email: user.email ?? email,
    name,
    loggedInAt: new Date().toISOString(),
  };

  cacheSession(session);
  return { success: true, data: session };
}

export async function login(
  email: string,
  password: string
): Promise<ApiResponse<AuthSession>> {
  const sb = requireSupabase();
  const { data: authData, error: loginError } =
    await sb.auth.signInWithPassword({ email, password });

  if (loginError) {
    if (loginError.message.toLowerCase().includes("invalid login credentials")) {
      return { success: false, error: "Invalid email or password." };
    }
    return { success: false, error: loginError.message };
  }

  const user = authData.user;
  if (!user) {
    return { success: false, error: "Login failed. Please try again." };
  }

  let name = user.email?.split("@")[0] ?? "User";
  try {
    const { data: profile } = await sb
      .from("profiles")
      .select("name")
      .eq("id", user.id)
      .single();

    if (profile) {
      name = profile.name;
    }
  } catch {}
  if (name === user.email?.split("@")[0] && user.user_metadata?.name) {
    name = user.user_metadata.name as string;
  }

  const session: AuthSession = {
    userId: user.id,
    email: user.email ?? email,
    name,
    loggedInAt: new Date().toISOString(),
  };

  cacheSession(session);
  return { success: true, data: session };
}

export async function forgotPassword(email: string): Promise<ApiResponse<null>> {
  const sb = requireSupabase();
  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data: null };
}

/**
 * Wait for Supabase to finish processing a recovery token from the URL hash.
 * When the user clicks the reset link in their email, Supabase redirects to
 * /reset-password#access_token=xxx&type=recovery. The client needs to exchange
 * that token for a session before we can call updateUser().
 */
export function onRecoveryReady(callback: () => void): () => void {
  const sb = requireSupabase();
  const {
    data: { subscription },
  } = sb.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN" || event === "PASSWORD_RECOVERY") {
      callback();
    }
  });
  return () => subscription?.unsubscribe();
}

export async function resetPassword(
  newPassword: string
): Promise<ApiResponse<null>> {
  const sb = requireSupabase();
  const { error } = await sb.auth.updateUser({ password: newPassword });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data: null };
}

export async function logout(): Promise<void> {
  clearSessionCache();
  const sb = requireSupabase();
  await sb.auth.signOut();
}

export function getCurrentSession(): AuthSession | null {
  const cached = readSessionCache();
  if (cached) return cached;
  return null;
}

export function isAuthenticated(): boolean {
  return getCurrentSession() !== null;
}

export async function refreshSession(): Promise<AuthSession | null> {
  const sb = requireSupabase();
  const {
    data: { session },
  } = await sb.auth.getSession();

  if (!session?.user) {
    clearSessionCache();
    return null;
  }

  let name = session.user.email?.split("@")[0] ?? "User";
  try {
    const { data: profile } = await sb
      .from("profiles")
      .select("name")
      .eq("id", session.user.id)
      .single();

    if (profile) {
      name = profile.name;
    }
  } catch {}
  if (name === session.user.email?.split("@")[0] && session.user.user_metadata?.name) {
    name = session.user.user_metadata.name as string;
  }

  const authSession: AuthSession = {
    userId: session.user.id,
    email: session.user.email ?? "",
    name,
    loggedInAt: session.created_at,
  };

  cacheSession(authSession);
  return authSession;
}
