import { Pool } from 'pg';
import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT COUNT(*) FROM waitlist');
    return NextResponse.json({ count: parseInt(result.rows[0].count, 10) });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ count: 0 });
  }
}

