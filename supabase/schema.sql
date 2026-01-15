-- Hustlz Waitlist Schema
-- Run this in your Supabase SQL Editor or local PostgreSQL

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_type VARCHAR(20) NOT NULL CHECK (user_type IN ('talent', 'client')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_user_type ON waitlist(user_type);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS) for Supabase
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (for public waitlist signup)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow reading count (optional, for showing waitlist numbers)
CREATE POLICY "Allow anonymous to count" ON waitlist
  FOR SELECT
  TO anon
  USING (true);

-- Sample query to check waitlist stats
-- SELECT user_type, COUNT(*) FROM waitlist GROUP BY user_type;

