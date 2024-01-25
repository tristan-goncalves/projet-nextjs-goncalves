// import React, { useState } from 'react';
// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
"use client"; // This is a client component
import React, { useEffect, useState } from 'react';

const Accueil = () => {
  const [apiData, setApiData] = useState<any>();

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
  const [mesData, setMesData] = useState();

  // Mettez à jour les données lorsque apiData change
  useEffect(() => {
    if (apiData && apiData.result && apiData.result.rows) {
      setMesData(apiData.result.rows);
    }
  }, [apiData]);

  console.log("Voici mes data : ", mesData);
  console.log("Voici mes data : ", mesData[0].intitule);


  return (
    <div>
      <h1>API Response:</h1>
      {mesData ? (
        <pre>{JSON.stringify(mesData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Accueil;
