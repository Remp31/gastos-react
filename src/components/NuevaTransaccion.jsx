import React, { useState } from 'react'

const NuevaTransaccion = () => {

    const [texto, setTexto] = useState('')
    const [importe, setImporte] = useState('')

    return (
        <>
            <h3>Agregar Nueva Transacción</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="texto">Descripción:</label>
                    <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Teclea una descripción' />
                </div>
                <div className="form-control">
                    <label htmlFor="importe">Importe: <br /> (Negativo - Egreso, Positivo - Ingreso)</label>
                    <input type="number" value={importe} onChange={(e) => setImporte(e.target.value)} placeholder='Teclea un importe' />
                </div>
                <button className='btn'>Agregar</button>
            </form>
        </>
    )
}

export default NuevaTransaccion