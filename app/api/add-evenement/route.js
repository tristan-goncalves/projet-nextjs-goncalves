// Importez les modules nécessaires
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import pgPromise from 'pg-promise';

// Initialisez la connexion à la base de données
// const pgp = pgPromise();
// const db = pgp(process.env.POSTGRES_URL);

// Exportez la fonction handler pour l'API
export default async function handler(req, res) {
  // if (req.method === 'POST') {

  //   console.log('Données reçues du frontend:', req.body);

  //   try {
  //     // Récupérez les données du corps de la requête
  //     const { intitule, resume, description, date, lieu, intervenants } = req.body;
  //     console.log(req)

  //     // Exécutez la requête SQL pour insérer les données dans votre base de données
  //     const result = await db.one(
  //       `INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
  //        VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
  //       [intitule, resume, description, date, lieu, intervenants]
  //     );

  //     console.log('Données insérées avec succès:', result);

  //     // Répondez avec les données insérées
  //     res.status(200).json({ success: true, data: result });
  //   } catch (error) {
  //     console.error('Erreur lors de l\'insertion des données:', error);
  //     res.status(500).json({ success: false, error: 'Erreur serveur' });
  //   }
  // } else {
  //   // Répondez avec une erreur si la méthode n'est pas autorisée
  //   res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  // }
}
