import Link from 'next/link';
import React, { useState } from 'react';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function Accueil(request: Request) {
  const { searchParams } = new URL(request.url);
  const intitule = searchParams.get('intitule');
  const petite_description = searchParams.get('petite_description');
  const grande_description = searchParams.get('grande_description');
  const date = searchParams.get('date');
  const lieu = searchParams.get('lieu');
  const intervenants = searchParams.get('intervenants');

  // try {

  //   await sql`INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
  //   VALUES ('Conférence sur l avenir de la technologie',
  //   'Découvrez les dernières tendances technologiques',
  //   'Une conférence passionnante sur l évolution rapide de la technologie et son impact sur notre avenir. Venez explorer les nouvelles frontières de l innovation avec nos experts renommés.',
  //   '2024-03-15',
  //   'Palais des Congrès',
  //   ARRAY['Sophie Martin',
  //   'François Dupont']);`;

  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
 
  const evenement = await sql`SELECT * FROM EVENEMENTS;`;
  return NextResponse.json({ evenement }, { status: 200 });


  return (
    <div className="container">
      
    </div>
  );

}

export default Accueil;