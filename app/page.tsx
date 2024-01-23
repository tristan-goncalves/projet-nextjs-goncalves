// pages/index.js
import React from 'react';
import Link from 'next/link';

const Accueil = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <Link href="/about">Aller à la page À propos</Link>
    </div>
  );
};

export default Accueil;