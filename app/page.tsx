import React from 'react';
import Link from 'next/link';

const Accueil = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <Link href="/about">À propos</Link>
    </div>
  );
};

export default Accueil;