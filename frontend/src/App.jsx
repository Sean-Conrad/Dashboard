import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import Contracts from "./pages/Contracts";
import Home from "./pages/Home";
import Employment from "./pages/Employment";

export default function App() {
  const { user } = useAuthContext()

  return (
    <div>
      <Topnav />
      <Router>
        <Sidenav />
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/contracts" element={user? <Contracts/> : <Navigate to="/login" />} />
          <Route path="/employment" element={user? <Employment/> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}
