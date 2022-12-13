import React from "react";
import { Card } from "react-bootstrap";

function Employs(props) {
  return (
    <Card style={{ width: "40rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>
          {props.firstName} {props.lastName}
        </Card.Title>

        <Card.Text>Email: {props.email}</Card.Text>
        <Card.Text>Phone: {props.phone}</Card.Text>
        <Card.Text>
          Address: {props.address} {props.city} {props.state} {props.postalCode}
        </Card.Text>
        <Card.Text>Reasons Not Able: {props.reasonsNotAble}</Card.Text>
        <Card.Text>Work Experience: {props.workExperience}</Card.Text>
        <Card.Text>Certifications: {props.certifications}</Card.Text>
        <Card.Text>Medical Conditions: {props.medicalConditions}</Card.Text>
        <Card.Text>Languages: {props.languages}</Card.Text>
        <Card.Text>Expected Pay: {props.expectedPay}</Card.Text>
        <Card.Text>Currently Employed: {props.currentlyEmployed}</Card.Text>
        <Card.Text>Right To Work: {props.canWorkInUS}</Card.Text>
        <Card.Text>Worked With Us Before: {props.workedWithUsBefore}</Card.Text>
        <Card.Text>Can Lift Above Fifty: {props.canLiftAboveFifty}</Card.Text>
        <Card.Text>Liscence And Vehicle: {props.liscenceAndVehicle}</Card.Text>
        <Card.Text>Willing To Travel: {props.willingToTravel}</Card.Text>
        <Card.Text>Date: {props.date}</Card.Text>

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
