import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
 
  try {
    await sql`INSERT INTO TB_EVENEMENT (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Conférence sur l avenir de la technologie', 'Découvrez les dernières tendances technologiques', 'Une conférence passionnante sur l évolution rapide de la technologie et son impact sur notre avenir. Venez explorer les nouvelles frontières de l innovation avec nos experts renommés.', '2024-03-15', 'Palais des Congrès', ARRAY['Sophie Martin', 'François Dupont']);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const evenements = await sql`SELECT * FROM EVENEMENTS;`;
  return NextResponse.json({ evenements }, { status: 200 });
}