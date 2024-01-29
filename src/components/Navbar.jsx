import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

export function Navbar() {
  return (
    <div className=" navbar text-lg bg-red-500 text-yellow-500 h-20  flex items-center p-2">
      <div className="leftSide mr-auto w-1/2 flex justify-start sm:justify-around">
        <Link className="sm:block hidden" to="/">
          Home
        </Link>
        <Link className="sm:block hidden" to="/menu">
          Menu
        </Link>
        <Link className="sm:block hidden" to="/about">
          About
        </Link>
        <Link className="sm:block hidden" to="/contact">
          Contact
        </Link>
        <button className="menu-btn ">
          <ReorderIcon />
        </button>
      </div>
      <div className="rightSide ml-auto">
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
