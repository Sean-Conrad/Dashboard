import {createContext, useReducer} from 'react'


export const CareersContext = createContext()

export const careersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CAREERS': 
            return{ careers: action.payload}
        //case 'LOGOUT':
        //    return{ user: null }
        default: 
            return state
    }
} 

export const CareersContextProvider = ({ children}) => {
    const [state, dispatch] = useReducer(careersReducer, {
        user: null
    })

    console.log('Careers context State: ', state)

    return (
        <CareersContext.Provider value={{...state, dispatch}}>
            {children}
        </CareersContext.Provider>
    )
}