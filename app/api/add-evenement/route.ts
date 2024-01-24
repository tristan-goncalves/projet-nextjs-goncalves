import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
 
  try {
    await sql`
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Conférence sur l avenir de la technologie', 'Découvrez les dernières tendances technologiques', 'Une conférence passionnante sur l évolution rapide de la technologie et son impact sur notre avenir. Venez explorer les nouvelles frontières de l innovation avec nos experts renommés.', '2024-03-15', 'Palais des Congrès', ARRAY['Sophie Martin', 'François Dupont']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Atelier de développement personnel', 'Explorez vos compétences et renforcez votre confiance en soi', 'Un atelier interactif axé sur le développement personnel, avec des exercices pratiques pour améliorer vos compétences et votre bien-être. Joignez-vous à nous pour une expérience transformative animée par notre coach expérimenté et un psychologue qualifié.', '2024-04-02', 'Maison écocitoyenne', ARRAY['Isabelle Leroux', 'Jean-Pierre Lambert']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Rencontre avec des anciens diplômés', 'Échangez avec des professionnels ayant réussi leur carrière', 'Rencontrez d anciens diplômés qui partageront leur expérience et donneront des conseils sur la transition de l université au monde professionnel. Une occasion unique de réseauter avec des personnes ayant réussi dans divers domaines.', '2024-04-20', 'La Cité du Vin', ARRAY['Marie Dubois', 'Pierre Moreau']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Tournoi inter-universitaire de football', 'Compétition amicale entre étudiants', 'Participez à un tournoi de football amusant entre différentes universités, avec des équipes compétitives et une atmosphère animée. Venez soutenir votre équipe préférée et profiter d une journée sportive inoubliable.', '2024-05-05', 'Stade Chaban-Delmas', ARRAY['Antoine Martin', 'Julie Lefevre']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Séminaire sur la gestion du temps', 'Optimisez votre emploi du temps et améliorez votre productivité', 'Un séminaire interactif pour apprendre des stratégies efficaces de gestion du temps et comment maximiser votre productivité en tant qu étudiant. Découvrez les secrets du succès temporel avec nos experts en gestion du temps.', '2024-05-18', 'Hôtel de Ville', ARRAY['Philippe Dubois', 'Céline Rousseau']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Festival de musique étudiant', 'Célébration de la diversité musicale', 'Assistez à un festival de musique organisé par des étudiants, mettant en vedette des groupes locaux et des talents émergents dans divers genres musicaux. Plongez-vous dans une atmosphère vibrante de créativité musicale.', '2024-06-10', 'Parc Bordelais', ARRAY['Lucie Martin', 'David Garcia']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Hackathon de développement logiciel', 'Compétition amicale pour les passionnés de programmation', 'Participez à un hackathon de 24 heures, travaillez en équipe pour résoudre des défis de programmation et présentez vos projets à un jury d experts. Une opportunité unique de mettre en pratique vos compétences en développement logiciel.', '2024-07-03', 'Hangar 14', ARRAY['Martin Dupuis', 'Sophie Leroux']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Cours de yoga en plein air', 'Détente et bien-être en plein air', 'Rejoignez une séance de yoga relaxante en plein air, idéale pour soulager le stress et améliorer votre bien-être physique et mental. Laissez-vous guider par notre instructeur de yoga certifié.', '2024-07-20', 'Jardin Public', ARRAY['Camille Lefevre', 'Alexandre Martin']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Exposition artistique étudiante', 'Découvrez les talents artistiques des étudiants', 'Une exposition mettant en avant les créations artistiques des étudiants, allant de la peinture à la sculpture en passant par la photographie. Explorez le monde artistique des étudiants et échangez avec les artistes.', '2024-08-05', 'CAPC Musée d Art Contemporain', ARRAY['Julien Moreau', 'Emma Dubois']);
    
    INSERT INTO EVENEMENTS (intitule, petite_description, grande_description, date, lieu, intervenants)
    VALUES ('Séminaire sur l entrepreneuriat étudiant', 'De l idée à la création d entreprise', 'Un séminaire inspirant sur le parcours entrepreneurial, avec des témoignages d étudiants ayant créé leur propre entreprise et des conseils d experts en entrepreneuriat. Découvrez les clés du succès entrepreneurial avec nos invités exceptionnels.', '2024-08-18', 'Université de Bordeaux', ARRAY['Sarah Lambert', 'Maxime Dupont']);
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const evenements = await sql`SELECT * FROM EVENEMENTS;`;
  return NextResponse.json({ evenements }, { status: 200 });
}