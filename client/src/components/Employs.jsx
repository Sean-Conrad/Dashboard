import React from "react";
import { Card } from "react-bootstrap";

const Employs = ({career}) => {
  const d = new Date(Number(career.date))
  const fullDate = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear()
  return (
    <Card style={{ width: "40rem", margin: "30px auto" }}>
      <Card.Body>
        <Card.Title>
          {career.firstName} {career.lastName}
        </Card.Title>

        <Card.Text>Email: {career.email}</Card.Text>
        <Card.Text>Phone: {career.phone}</Card.Text>
        <Card.Text>
          Address: {career.address} {career.city} {career.state} {career.postalCode}
        </Card.Text>
        <Card.Text>Reasons Not Able: {career.reasonsNotAble}</Card.Text>
        <Card.Text>Work Experience: {career.workExperience}</Card.Text>
        <Card.Text>Certifications: {career.certifications}</Card.Text>
        <Card.Text>Medical Conditions: {career.medicalConditions}</Card.Text>
        <Card.Text>Languages: {career.languages}</Card.Text>
        <Card.Text>Expected Pay: {career.expectedPay}</Card.Text>
        <Card.Text>Currently Employed: {career.currentlyEmployed}</Card.Text>
        <Card.Text>Right To Work: {career.canWorkInUS}</Card.Text>
        <Card.Text>Worked With Us Before: {career.workedWithUsBefore}</Card.Text>
        <Card.Text>Can Lift Above Fifty: {career.canLiftAboveFifty}</Card.Text>
        <Card.Text>Liscence And Vehicle: {career.liscenceAndVehicle}</Card.Text>
        <Card.Text>Willing To Travel: {career.willingToTravel}</Card.Text>
        <Card.Text>Date: {fullDate}</Card.Text>

        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Employs;

// const employReqs = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     email: "b@beyonce.com",
//     phone: "+123 456 789",
//     address: "1000 N. Happy Ave.",
//     city: "Orlando",
//     state: "Florida",
//     postalCode: "33922",
//     reasonsNotAble: "Ankle injury 4 years ago",
//     workExperience: "5 years construction",
//     certifications: "Fork lift and Scissor lift certified",
//     medicalConditions: "Asthma",
//     languages: "English, Spanish, Portuguese",
//     expectedPay: "$24/hr",
//     currentlyEmployed: "No",
//     rightToWork: "Yes",
//     workedWithUsBefore: "No",
//     canLiftAboveFifty: "Yes",
//     liscenceAndVehicle: "Yes",
//     willingToTravel: "Yes",
//     date: "10/1/2022"
//   },
