import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const result = await sql`INSERT INTO evenements (intitule, resume, description, date, lieu, intervenants) VALUES (${formData.intitule}, ${formData.resume}, ${formData.description}, ${formData.date}, ${formData.lieu}, ${formData.intervenants})`;

      res.status(200).json({ message: 'Données insérées avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'insertion des données:', error);
      res.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}