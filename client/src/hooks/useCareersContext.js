import {CareersContext} from '../context/CareersContext'
import {useContext} from 'react'

export const useCareersContext = () => {
    const context = useContext(CareersContext) 

    if(!context) {
        throw Error('useCareersContext must be used inside an CareersContextProvider')
    }

    return context
} 