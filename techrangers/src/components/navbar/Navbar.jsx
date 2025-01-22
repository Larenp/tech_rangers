import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logoLink">
          <span className="logo">lamabooking</span>
        </Link>

        <div className="navItems">
          {/* Home Link */}
          <Link to="/" className="navButton">Home</Link>
          
  
              <Link to="/login" className="navButton">Login</Link>
              <Link to="/signup" className="navButton">Register</Link> {/* Fixed the typo here */}
          
            <Link to="/profile" className="navButton">Profile</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
