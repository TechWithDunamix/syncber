-- Run this in your Supabase SQL editor (Dashboard > SQL Editor)
-- Creates tables needed for the Skillber platform

-- 1. Profiles table (extends auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Allow users to read their own profile
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Allow users to insert their own profile (during signup)
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Allow users to update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- 2. Enrollments table
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  course_title text not null,
  purchased_at timestamptz not null default now(),
  amount numeric(10,2) not null,
  unique(user_id, course_id)
);

alter table public.enrollments enable row level security;

-- Allow users to read their own enrollments
create policy "Users can read own enrollments"
  on public.enrollments for select
  using (auth.uid() = user_id);

-- Allow users to insert their own enrollments (purchase)
create policy "Users can insert own enrollments"
  on public.enrollments for insert
  with check (auth.uid() = user_id);

-- 3. Payments table
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  course_id text not null,
  stripe_session_id text unique not null,
  stripe_payment_intent_id text,
  amount numeric(10,2) not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  confirmed_at timestamptz
);

-- 4. Create a function to handle new user signup (auto-create profile)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    new.email
  );
  return new;
end;
$$;

-- Trigger the function after a user is created in auth.users
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
