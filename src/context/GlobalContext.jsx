import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Estado Inicial
const initialState = {
    transacciones: [
        { id: 1, texto: 'Compre Pizza', importe: -350 },
        { id: 2, texto: 'Vendí una PC', importe: 4000 },
        { id: 3, texto: 'Compre un libro', importe: -200 },
        { id: 4, texto: 'Me pagaron mi salario', importe: 5000 },
    ]
}

//Creamos el contexto
export const GlobalContext = createContext(initialState)

//Componente Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{
        transacciones: state.transacciones
    }}>
        {children}
    </GlobalContext.Provider>)
}