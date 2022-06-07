import React from 'react'

const Transaccion = ({ transaccion }) => {
    const signo = transaccion.importe < 0 ? '-' : '+'

    return (
        <li className={transaccion.importe < 0 ? "minus" : "plus"}>
            {transaccion.texto} <span>{signo}${Math.abs(transaccion.importe)}</span><button className='delete-btn'>x</button>
        </li>
    )
}

export default Transaccion