'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [annonces, setAnnonces] = useState([])

  useEffect(() => {
    chargerAnnonces()
  }, [])

  async function chargerAnnonces() {
    const { data, error } = await supabase
      .from('annonces')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) {
      setAnnonces(data)
    }
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>MonBailleurBF</h1>

      <h2>Dernières annonces</h2>

      {annonces.length === 0 ? (
        <p>Aucune annonce disponible</p>
      ) : (
        annonces.map((annonce) => (
          <div
            key={annonce.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              marginBottom: '10px'
            }}
          >
            <h3>{annonce.titre}</h3>
            <p>{annonce.description}</p>
            <p><b>Prix :</b> {annonce.prix} FCFA</p>
            <p><b>Ville :</b> {annonce.ville}</p>
            <p><b>Quartier :</b> {annonce.quartier}</p>
          </div>
        ))
      )}
    </main>
  )
            }
