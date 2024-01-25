// import React, { useState } from 'react';
// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
"use client"; // This is a client component
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Accueil = () => {
  const [apiData, setApiData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/select-evenement');
        const data = await response.json();
        setApiData(data);
        if (data && data.result && data.result.rows) {
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Utilisez une variable d'état pour stocker les données récupérées
  const [mesData, setMesData] = useState<any[] | null>(null);

  // Mettez à jour les données lorsque apiData change
  useEffect(() => {
    if (apiData && apiData.result && apiData.result.rows) {
      setMesData(apiData.result.rows);
    }
  }, [apiData]);

  return (
    <div>
      {/* Barre de navigation */}
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/ajout">Ajouter un événement</Link>
      </nav>

      <h1>Événements:</h1>
      {apiData ? (
        <div>
          {apiData.result.rows.map((evenement: Evenement) => (
            <div key={evenement.id} className={styles['event-container']}>
              <h2 className={styles['event-title']}>{evenement.intitule}</h2>
              <p className={styles['event-description']}>{evenement.petite_description}</p>
              <p className={styles['event-date']}>Date: {new Date(evenement.date).toLocaleDateString()}</p>
              <p className={styles['event-location']}>Lieu: {evenement.lieu}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};
export default Accueil;
