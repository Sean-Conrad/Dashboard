import employReqs from "../employReqs";
import Employs from "../components/Employs";

function createCard(employs) {
  return (
    <Employs
      key={employs.id}
      firstName={employs.firstName}
      lastName={employs.lastName}
      email={employs.email}
      phone={employs.phone}
      address={employs.address}
      city={employs.city}
      state={employs.state}
      postalCode={employs.postalCode}
      reasonsNotAble={employs.reasonsNotAble}
      workExperience={employs.workExperience}
      certifications={employs.certifications}
      medicalConditions={employs.medicalConditions}
      languages={employs.languages}
      expectedPay={employs.expectedPay}
      currentlyEmployed={employs.currentlyEmployed}
      workedWithUsBefore={employs.workedWithUsBefore}
      canLiftAboveFifty={employs.workedWithUsBefore}
      liscenceAndVehicle={employs.workedWithUsBefore}
      willingToTravel={employs.workedWithUsBefore}
      date={employs.date}
    />
  );
}

export default function Employment() {
  return (
    <div className="wrapper">
      <div className="container-fluid row">
        <div class="col-sm-6">{employReqs.map(createCard)}</div>
      </div>
    </div>
  );
}
