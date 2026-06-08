'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Publier() {
  const [nomBailleur, setNomBailleur] = useState('')
  const [description, setDescription] = useState('')
  const [typeLogement, setTypeLogement] = useState('')
  const [prix, setPrix] = useState('')
  const [ville, setVille] = useState('')
  const [quartier, setQuartier] = useState('')
  const [telephone, setTelephone] = useState('+226')
  const [whatsapp, setWhatsapp] = useState('+226')

  async function publierAnnonce(e) {
    e.preventDefault()

    const { error } = await supabase
      .from('annonces')
      .insert([
        {
          nom_bailleur: nomBailleur,
          description,
          type_logement: typeLogement,
          prix,
          ville,
          quartier,
          telephone,
          whatsapp
        }
      ])

    if (error) {
      alert('Erreur lors de la publication')
      console.log(error)
    } else {
      alert('Annonce publiée avec succès')
    }
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>Publier une annonce</h1>

      <form onSubmit={publierAnnonce}>

        <input
          placeholder="Nom du bailleur"
          value={nomBailleur}
          onChange={(e) => setNomBailleur(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description et commodités"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <select
          value={typeLogement}
          onChange={(e) => setTypeLogement(e.target.value)}
        >
          <option value="">Choisir</option>
          <option>Chambre salon</option>
          <option>Entrée couché</option>
          <option>2 chambres salon</option>
          <option>3 chambres salon</option>
          <option>Mini villa</option>
        </select>

        <br /><br />

        <input
          type="number"
          placeholder="Prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />

        <span> FCFA</span>

        <br /><br />

        <input
          placeholder="Ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Quartier"
          value={quartier}
          onChange={(e) => setQuartier(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Publier l'annonce
        </button>

      </form>
    </main>
  )
      }
