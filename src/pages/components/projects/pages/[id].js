/* import React from 'react'
import Dashboard from '../components/dashboard'

export default function ProjectPage({ dataid }) {
  return <Dashboard dataid={dataid} />
}

export async function getServerSideProps({ params }) {
  const responseid = await fetch(`https://team6.onrender.com/api/Proyectos/${params.id}`)
  const dataid = await responseid.json()

  return {
    props: {
      dataid
    }
  }
} */