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

      <h2>Ajout d'un événement</h2>
      <form action="/api/add-evenement" method="post">
        <label htmlFor="intitule">Intitulé de l'événement:</label>
        <input type="text" id="intitule" name="intitule" required /><br />

        <label htmlFor="resume">Résumé de l'événement:</label>
        <textarea id="resume" name="resume" rows="4" required></textarea><br />

        <label htmlFor="description">Description détaillée de l'événement:</label>
        <textarea id="description" name="description" rows="8" required></textarea><br />

        <label htmlFor="date">Date de l'événement:</label>
        <input type="date" id="date" name="date" required /><br />

        <label htmlFor="intervenants">Intervenants:</label>
        <input type="text" id="intervenants" name="intervenants" required /><br />

        <button type="submit">Créer l'événement</button>
      </form>
    </div>
  );
};

export default Accueil;