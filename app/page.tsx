// import React, { useState } from 'react';
// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
"use client"; // This is a client component
import React, { useEffect, useState } from 'react';

const Accueil = () => {
  const [apiData, setApiData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/select-evenement');
        const data = await response.json();
        setApiData(data);
        if (data && data.result && data.result.rows) {
          console.log("Voici apiData : ", data.result.rows);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Accueil;
