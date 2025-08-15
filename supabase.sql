-- Basic schema for Viral OS
create table if not exists users (
  id uuid primary key,
  email text,
  role text,
  trial_ends_at timestamptz,
  device_fp_hash text,
  ip_hash text,
  created_at timestamptz default now()
);

create table if not exists searches (
  id uuid primary key,
  user_id uuid references users(id),
  topic text,
  platforms jsonb,
  results_count int,
  created_at timestamptz default now()
);

-- Other tables omitted for brevity
