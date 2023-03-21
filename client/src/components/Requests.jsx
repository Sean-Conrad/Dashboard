import React from "react";
import { Card } from "react-bootstrap";

const Requests = ({contract}) => {
  const d = new Date(Number(contract.date))
  const fullDate = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear()
  return (
    <div className="container-fluid">
      <Card style={{ width: "40rem", margin: "30px auto" }}>
        <Card.Body>
          <Card.Title>{contract.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Subject: {contract.subject}
          </Card.Subtitle>
          <Card.Text>Message: {contract.message}</Card.Text>
          <Card.Text>Address: {contract.address}</Card.Text>
          <Card.Text>Phone: {contract.phone}</Card.Text>
          <Card.Text>Email: {contract.email}</Card.Text>
          <Card.Text>Date: {fullDate}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>

  );
}

export default Requests;
