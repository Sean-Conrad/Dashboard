import React, {useEffect} from "react";
import Requests from "../components/Requests";
import { useContractsContext } from "../hooks/useContractsContext";
import { useAuthContext } from "../hooks/useAuthContext";


export default function Contracts() {

  const {contracts, dispatch} = useContractsContext() 
  const {user} = useAuthContext()

  useEffect(() => {
    const getTestContract = async () => {
      const response = await fetch('/api/getContracts', {
        headers: {
          'Authorization' : `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CONTRACTS', payload: json})
      }
    }
    if (user) {
      getTestContract()
    } 

    
  }, [dispatch, user])




  return (
    <div className="wrapper">
      <div className="container-fluid row">
        <div>{contracts && contracts.map((contract) => (
          <Requests key={contracts._id} contract={contract}/>
        ))}
        </div>
      </div>
    </div>
  );
}
