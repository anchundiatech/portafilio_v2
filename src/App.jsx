import React from 'react'

import Proyectos from './components/Proyectos'
import './App.css'
import Header from './components/Header'
import Sobremi from './components/Sobremi'
import Tecnologias from './components/Tecnologias'
import Contacto from './components/CardContacto'
import Footer from './components/Footer'

function App() {



  return (


   <>

      <Header/>

    <main className="container">

      <Sobremi/>
      <Proyectos/>
      <Tecnologias/>
      <Contacto/>
    </main>

    <Footer/>
    </>






  )

}

export default App
