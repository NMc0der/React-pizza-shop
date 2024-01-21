import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="rightSide"></div>
    </div>
  );
}
