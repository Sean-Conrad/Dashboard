import { Container, Nav, Navbar } from "react-bootstrap";
import { useLogout } from "../hooks/useLogout";


export default function Topnav() {

  const { logout } = useLogout();

  const handleClick = () => {
    logout()
  }

  return (
    <Navbar className="top-nav" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">SignUp</Nav.Link>
          <button onClick={handleClick}>Log out</button>      

        </Nav>
      </Container>
    </Navbar>
  );
}
