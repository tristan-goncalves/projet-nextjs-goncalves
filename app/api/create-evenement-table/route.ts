import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE EVENEMENTS ( 
        id integer primary key, 
        intitule varchar(255), 
        petite_description varchar(255), 
        grande_description varchar(255),
        date varchar(255),
        lieu varchar(255),
        intervenants varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 