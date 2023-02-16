import React, {useEffect, useState} from "react";
import axios from "axios";
import Requests from "../components/Requests";


export default function Contracts() {

  const [contract, setContract] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    date: '',
    subject: '',
    message: '',
    posts: []
  })

  useEffect(() => {
    getTestContract();
  }, [])

function createCard(contract) {
  return (
    <Requests
      key={contract.id}
      name={contract.name}
      address={contract.address}
      phone={contract.phone}
      email={contract.email}
      date={contract.date}
      subject={contract.subject}
      message={contract.message}
    />
  );
}

function getTestContract(){
  axios.get('/api/getContracts')
    .then((response)=> {
      const data = response.data;
      setContract(()=> {
          return{
              posts: data
          }
      })
      console.log("Data has been recieved");
    })
    .catch(()=> {
        alert('Error retrieving data.'); 
    })
}

function displayContracts(posts){
  if(!posts){
    return null;
 }
 return(
    posts.map(createCard)
 );
}


  return (
    <div className="wrapper">
      <div className="container-fluid row">
        <div>{displayContracts(contract.posts)}</div>
      </div>
    </div>
  );
}
