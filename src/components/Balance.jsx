import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {

    const { transacciones } = useContext(GlobalContext)

    const importes = transacciones.map(transaccion => transaccion.importe)
    const total = importes.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div>
            <h4>Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance