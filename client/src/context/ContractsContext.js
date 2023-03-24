import {createContext, useReducer} from 'react'


export const ContractsContext = createContext()

export const contractsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTRACTS': 
            return{ contracts: action.payload}
        //case 'LOGOUT':
        //    return{ user: null }
        default: 
            return state
    }
} 

export const ContractsContextProvider = ({ children}) => {
    const [state, dispatch] = useReducer(contractsReducer, {
        user: null
    })

    console.log('Contracts context State: ', state)

    return (
        <ContractsContext.Provider value={{...state, dispatch}}>
            {children}
        </ContractsContext.Provider>
    )
}