import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL);

export { db };