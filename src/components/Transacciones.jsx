import React, { useContext } from 'react'
import Transaccion from './Transaccion'
import { GlobalContext } from '../context/GlobalContext'

const Transacciones = () => {

    const { transacciones } = useContext(GlobalContext)
    //console.log(transacciones)

    return (
        <>
            <h3>Historial</h3>
            <ul className='list'>
                {transacciones.map(transaccion => (<Transaccion key={transaccion.id} transaccion={transaccion} />))}
            </ul>
        </>
    )
}

export default Transacciones