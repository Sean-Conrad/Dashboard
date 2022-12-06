import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import Contracts from "./pages/Contracts";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Employment from "./pages/Employment";

export default function App() {
  return (
    <div>
      <Topnav />
      <Router>
        <Sidenav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
      </Router>
    </div>
  );
}
