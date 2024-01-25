// "use client"; // This is a client component
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

const Ajout = () => {
//   const [formData, setFormData] = useState({
//     intitule: '',
//     resume: '',
//     description: '',
//     date: '',
//     lieu: '',
//     intervenants: [''], // Initialisation avec un champ vide
//   });

//   const [eventCreated, setEventCreated] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
//     const { name, value } = e.target;
//     const updatedIntervenants = [...formData.intervenants];
//     updatedIntervenants[index] = value;
  
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === 'intervenants' ? updatedIntervenants : value,
//     }));
//   };

//   const addIntervenant = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       intervenants: [...prevData.intervenants, ''],
//     }));
//   };

//   const removeIntervenant = (index: number) => {
//     const updatedIntervenants = [...formData.intervenants];
//     updatedIntervenants.splice(index, 1);
  
//     setFormData((prevData) => ({
//       ...prevData,
//       intervenants: updatedIntervenants,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Afficher un message de confirmation
//     const isConfirmed = window.confirm("Êtes-vous sûr de vouloir créer l'événement ?");

//     // Si l'utilisateur a confirmé, procédez avec l'action souhaitée
//     if (isConfirmed) {
//       // Exemple : Envoyer les données au backend
  
//       // Mettre à jour l'état pour indiquer que l'événement a été créé
//       setEventCreated(true);
//     }

//     try {
//       const response = await fetch('../api/add-evenement', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log(JSON.stringify(formData))

//       if (response.ok) {
//         console.log('Données insérées avec succès !');
//       } else {
//         console.error('Erreur lors de l\'envoi des données.');
//       }
//     } catch (error) {
//       console.error('Erreur:', error);
//     }

//   };

//   return (
//     <div className="container">
//       <nav>
//         <Link href="/">Accueil</Link>
//         <Link href="/ajout">Ajouter un événement</Link>
//       </nav>

//       <h2>Ajout d'un événementtt</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="intitule">Intitulé de l'événement:</label><br />
//         <input
//           type="text"
//           id="intitule"
//           name="intitule"
//           value={formData.intitule}
//           onChange={(e) => handleChange(e, 0)}
//           required
//         /><br />

//         <label htmlFor="resume">Résumé de l'événement:</label><br />
//         <textarea
//           id="resume"
//           name="resume"
//           rows={4}
//           value={formData.resume}
//           onChange={(e) => handleChange(e, 1)}
//           required
//         ></textarea><br />

//         <label htmlFor="description">Description détaillée de l'événement:</label><br />
//         <textarea
//           id="description"
//           name="description"
//           rows={8}
//           value={formData.description}
//           onChange={(e) => handleChange(e, 2)}
//           required
//         ></textarea><br />

//         <label htmlFor="date">Date de l'événement:</label><br />
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={formData.date}
//           onChange={(e) => handleChange(e, 3)}
//           required
//         /><br />

//         <label htmlFor="lieu">Lieu :</label><br />
//         <input
//           type="text"
//           id="lieu"
//           name="lieu"
//           value={formData.lieu}
//           onChange={(e) => handleChange(e, 4)}
//           required
//         /><br />

//         <label htmlFor="intervenants">Intervenants:</label><br />
//         {formData.intervenants.map((intervenant, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               id={`intervenant-${index}`}
//               name="intervenants"
//               value={intervenant}
//               onChange={(e) => handleChange(e, index)}
//               required
//             />
//             {index > 0 && (
//               <button type="button" onClick={() => removeIntervenant(index)}>
//                 Supprimer
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={addIntervenant}>
//           Ajouter intervenant
//         </button><br /><br />

//         <button type="submit">Créer l'événement</button>
//       </form>
//       {eventCreated && <p>L'événement a bien été créé !</p>}
//     </div>
//   );
};

export default Ajout;