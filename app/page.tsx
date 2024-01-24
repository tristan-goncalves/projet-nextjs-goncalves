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

      <h2>Ajout d'un événement</h2><br />
      <form action="/send-data-here" method="post">
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form>
    </div>
  );
};

export default Accueil;