import { Container, Nav, Navbar } from "react-bootstrap";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";


export default function Topnav() {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout()
  }

  return (
    <Navbar className="top-nav" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
        
          { !user && (
            <div >          
              <Nav.Link className="no-block" href="/login">Login</Nav.Link>
              <Nav.Link className="no-block" href="/signup">SignUp</Nav.Link>
            </div>
          )}

          { user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>  
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
