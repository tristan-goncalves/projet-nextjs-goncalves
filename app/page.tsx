import React from 'react';
import Link from 'next/link';

const Accueil = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <nav>
        <ul>
          <li><Link href="/evenement">Événement</Link></li>
          <li><Link href="/inscription">Inscription</Link></li>
          <li><Link href="/about">À propos</Link></li>
        </ul>
      </nav>

      
    </div>
  );
};

export default Accueil;