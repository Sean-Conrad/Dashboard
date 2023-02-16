import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

function Sidenav() {
  const navigate = useNavigate();
  return (
    <div id="side-wrapper">
      <SideNav
        onSelect={(selected) => {
          console.log(selected);
          navigate("/" + selected);
        }}
        className="sideNav"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="Home">
          <NavItem eventKey="Home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="Contracts">
            <NavIcon>
              <i
                className="fa-solid fa-paper-plane"
                style={{ fontSize: "1.5em" }}
              />
            </NavIcon>
            <NavText>Contracts</NavText>
          </NavItem>
          <NavItem eventKey="Employment">
            <NavIcon>
              <i
                className="fa-solid fa-handshake"
                style={{ fontSize: "1.5em" }}
              />
            </NavIcon>
            <NavText>Employment</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidenav;
