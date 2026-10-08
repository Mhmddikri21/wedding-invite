-- Wedding Invite RSVP database
-- Run this once in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  attending boolean not null default true,
  guest_count smallint not null default 1,
  message varchar(500),
  guest_id varchar(120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint rsvps_guest_count_check check (guest_count between 0 and 10)
);

create index if not exists rsvps_created_at_idx on public.rsvps (created_at desc);
create index if not exists rsvps_attending_idx on public.rsvps (attending);
create index if not exists rsvps_guest_id_idx on public.rsvps (guest_id);

alter table public.rsvps enable row level security;

-- The application writes through the server using the service-role key.
-- No public INSERT/SELECT policy is intentionally created.
