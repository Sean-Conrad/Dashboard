import React from "react";
import { Card } from "react-bootstrap";

function Requests(props) {
  return (
    <Card style={{ width: "40rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subject}
        </Card.Subtitle>
        <Card.Text>{props.message}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Requests;
