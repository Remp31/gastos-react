import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IngresosEgresos = () => {

    const { transacciones } = useContext(GlobalContext)
    const importes = transacciones.map(transaccion => transaccion.importe)

    const ingresos = importes
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const egresos = importes
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
            .toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Ingresos</h4>
                <p className='money plus'>+{ingresos}</p>
            </div>
            <div>
                <h4>Egresos</h4>
                <p className='money minus'>-${egresos}</p>
            </div>
        </div>
    )
}

export default IngresosEgresos