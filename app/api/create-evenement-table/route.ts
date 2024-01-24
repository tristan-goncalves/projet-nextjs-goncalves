import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import Accueil from './../../page';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`SELECT * FROM EVENEMENTS;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  let laData = getEvenement()
  console.log(laData)
}