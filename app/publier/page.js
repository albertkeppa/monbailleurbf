'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Publier() {
  const [nomBailleur, setNomBailleur] = useState('')
  const [description, setDescription] = useState('')
  const [typeLogement, setTypeLogement] = useState('Chambre-salon')
  const [prix, setPrix] = useState('')
  const [ville, setVille] = useState('')
  const [quartier, setQuartier] = useState('')
  const [telephone, setTelephone] = useState('+226')
  const [whatsapp, setWhatsapp] = useState('+226')
  const [imageUrl, setImageUrl] = useState('')

  async function publierAnnonce(e) {
    e.preventDefault()

    const { error } = await supabase
      .from('annonces')
      .insert([
        {
          nom_bailleur: nomBailleur,
          description,
          type_logement: typeLogement,
          prix: parseInt(prix),
          ville,
          quartier,
          telephone,
          whatsapp,
          image_url: imageUrl
        }
      ])

    if (error) {
      alert('Erreur lors de la publication')
      console.log(error)
      return
    }

    alert('Annonce publiée avec succès')

    setNomBailleur('')
    setDescription('')
    setTypeLogement('Chambre-salon')
    setPrix('')
    setVille('')
    setQuartier('')
    setTelephone('+226')
    setWhatsapp('+226')
    setImageUrl('')
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>Publier une annonce</h1>

      <form onSubmit={publierAnnonce}>

        <input
          type="text"
          placeholder="Nom du bailleur"
          value={nomBailleur}
          onChange={(e) => setNomBailleur(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <select
          value={typeLogement}
          onChange={(e) => setTypeLogement(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        >
          <option>Chambre-salon</option>
          <option>Entrée-couchée</option>
          <option>2 chambres-salon</option>
          <option>3 chambres-salon</option>
          <option>Mini villa</option>
        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: '100%',
            height: '120px',
            padding: '10px',
            marginBottom: '10px'
          }}
        />

        <input
          type="number"
          placeholder="Prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          required
          style={{ width: '100%', padding: '10px' }}
        />

        {prix && (
          <p>
            <strong>
              {Number(prix).toLocaleString()} FCFA
            </strong>
          </p>
        )}

        <input
          type="text"
          placeholder="Ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <input
          type="text"
          placeholder="Quartier"
          value={quartier}
          onChange={(e) => setQuartier(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <input
          type="text"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <input
          type="text"
          placeholder="URL de la photo"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <button
          type="submit"
          style={{
            padding: '12px',
            width: '100%',
            fontSize: '16px'
          }}
        >
          Publier l'annonce
        </button>

      </form>
    </main>
  )
           }
