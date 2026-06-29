/**
 * API Simulation Utilities
 * Simulates async API calls with configurable latency for development.
 */

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

/**
 * Simulates an API call by wrapping data in a Promise with a delay.
 * @param data The response data to return
 * @param delayMs Simulated network delay (default: 400ms)
 * @param shouldFail If true, simulates a server error
 */
export function simulateApiCall<T>(
  data: T,
  delayMs: number = 400,
  shouldFail: boolean = false
): Promise<ApiResponse<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (shouldFail) {
        resolve({ success: false, error: "Simulated server error" });
      } else {
        resolve({ success: true, data });
      }
    }, delayMs);
  });
}

/**
 * Simple UUID generator for generating IDs locally.
 */
export function generateId(): string {
  return "id_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
}

/**
 * Safe localStorage wrapper with error handling.
 */
export const storage = {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("localStorage write error:", e);
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("localStorage remove error:", e);
    }
  },
};
