import React, {useEffect, useState} from "react";
import Employs from "../components/Employs";
import { useCareersContext } from "../hooks/useCareersContext";
import { useAuthContext } from "../hooks/useAuthContext";


export default function Careers() {

  const {careers, dispatch} = useCareersContext() 
  const {user} = useAuthContext()

  useEffect(() => {
    const getTestCareer = async () => {
      const response = await fetch('/api/getCareers', {
        headers: {
          'Authorization' : `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CAREERS', payload: json})
      }
    }
    if (user) {
      getTestCareer()
    } 

    
  }, [dispatch, user])



  return (
    <div className="wrapper">
      <div className="container-fluid row">
        <div>{careers && careers.map((career) => (
            <Employs key={careers._id} career={career}/>
          ))}
          </div>
      </div>
    </div>
  );
}
