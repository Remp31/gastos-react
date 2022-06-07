import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IngresosEgresos from './components/IngresosEgresos'
import Transacciones from './components/Transacciones'
import NuevaTransaccion from './components/NuevaTransaccion'

import { GlobalProvider } from './context/GlobalContext'

import './App.css'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IngresosEgresos />
        <Transacciones />
        <NuevaTransaccion />
      </div>
    </GlobalProvider>
  )
}

export default App
