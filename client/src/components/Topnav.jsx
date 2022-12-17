import { Container, Nav, Navbar } from "react-bootstrap";

export default function Topnav() {
  return (
    <Navbar className="top-nav" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">SignUp</Nav.Link>


        </Nav>
      </Container>
    </Navbar>
  );
}
