import React, {useEffect, useState} from "react";
import axios from "axios";
import Employs from "../components/Employs";


export default function Careers() {

  const [career, setCareer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    reasonsNotAble: '',
    workExperience: '',
    certifications: '',
    medicalConditions: '',
    languages: '',
    expectedPay: '',
    currentlyEmployed: '',
    canWorkInUS: '',
    workedWithUsBefore: '',
    canLiftAboveFifty: '',
    liscenceAndVehicle: '',
    willingToTravel: '',
    posts: []
  })

  useEffect(() => {
    getTestCareer();
  }, [])

function createCard(career) {
  return (
    <Employs
      key={career.id}
      firstName={career.firstName}
      lastName={career.lastName}
      email={career.email}
      phone={career.phone}
      address={career.address}
      city={career.city}
      state={career.state}
      postalCode={career.postalCode}
      reasonsNotAble={career.reasonsNotAble}
      workExperience={career.workExperience}
      certifications={career.certifications}
      medicalConditions={career.medicalConditions}
      languages={career.languages}
      expectedPay={career.expectedPay}
      currentlyEmployed={career.currentlyEmployed}
      canWorkInUS={career.canWorkInUS}
      workedWithUsBefore={career.workedWithUsBefore}
      canLiftAboveFifty={career.canLiftAboveFifty}
      liscenceAndVehicle={career.liscenceAndVehicle}
      willingToTravel={career.willingToTravel}
    />
  );
}

function getTestCareer(){
  axios.get('/api/getCareers')
    .then((response)=> {
      const data = response.data;
      setCareer(()=> {
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

function displayCareers(posts){
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
        <div class="tickets">{displayCareers(career.posts)}</div>
      </div>
    </div>
  );
}
