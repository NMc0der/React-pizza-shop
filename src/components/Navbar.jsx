import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar text-lg bg-red-500 text-yellow-500 h-20  flex items-center p-2">
      <div className="leftSide mr-auto w-1/2 flex justify-around ">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="rightSide">
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
