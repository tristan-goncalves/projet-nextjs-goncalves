import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { db } from '../create-evenement-table';
 
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { intitule, resume, description, date, lieu, intervenants } = req.body;
  
        // Exécutez la requête SQL pour insérer les données dans votre base de données
        const result = await db.one(`INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
        VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [intitule, resume, description, date, lieu, intervenants]);

        console.log('Données insérées avec succès:', result);
  
        res.status(200).json({ success: true, data: result });
      } catch (error) {
        console.error('Erreur lors de l\'insertion des données:', error);
        res.status(500).json({ success: false, error: 'Erreur serveur' });
      }
    } else {
      res.status(405).json({ success: false, error: 'Méthode non autorisée' });
    }
  }