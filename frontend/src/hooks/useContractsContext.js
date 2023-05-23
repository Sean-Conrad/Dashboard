import {ContractsContext} from '../context/ContractsContext'
import {useContext} from 'react'

export const useContractsContext = () => {
    const context = useContext(ContractsContext) 

    if(!context) {
        throw Error('useContractsContext must be used inside an ContractsContextProvider')
    }

    return context
} 