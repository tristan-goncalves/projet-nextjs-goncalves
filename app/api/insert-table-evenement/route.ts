import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
      VALUES ('Festival de musique étudiant', 'Célébration de la diversité musicale', 'Assistez à un festival de musique organisé par des étudiants, mettant en vedette des groupes locaux et des talents émergents dans divers genres musicaux. Plongez-vous dans une atmosphère vibrante de créativité musicale.', '2024-06-10', 'Parc Bordelais', ARRAY['Lucie Martin', 'David Garcia']);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}