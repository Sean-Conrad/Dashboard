import React from "react";
import { Card } from "react-bootstrap";

const Requests = ({contract}) => {
  return (
    <Card style={{ width: "40rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>{contract.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Subject: {contract.subject}
        </Card.Subtitle>
        <Card.Text>Message: {contract.message}</Card.Text>
        <Card.Text>Address: {contract.address}</Card.Text>
        <Card.Text>Phone: {contract.phone}</Card.Text>
        <Card.Text>Email: {contract.email}</Card.Text>
        
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Requests;
