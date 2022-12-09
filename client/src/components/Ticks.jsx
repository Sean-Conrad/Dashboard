import React from "react";
import { Card } from "react-bootstrap";

function Ticks(props) {
  return (
    <Card style={{ width: "40rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            <p></p>        
        </Card.Subtitle>
        <Card.Text>{props.body}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Ticks;
