import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  try {
    const { email, user_type } = await request.json();

    if (!email || !user_type) {
      return NextResponse.json(
        { error: 'Email and user_type are required' },
        { status: 400 }
      );
    }

    if (!['talent', 'client'].includes(user_type)) {
      return NextResponse.json(
        { error: 'user_type must be either "talent" or "client"' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO waitlist (email, user_type) VALUES ($1, $2) RETURNING id',
      [email, user_type]
    );

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error: any) {
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 409 }
      );
    }
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}

