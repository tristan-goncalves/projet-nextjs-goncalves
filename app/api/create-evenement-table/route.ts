import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS EVENEMENTS ( 
        id serial primary key, 
        intitule text, 
        petite_description text, 
        grande_description text,
        date date,
        lieu text,
        intervenants text[] );
        
        SELECT * FROM EVENEMENTS;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}