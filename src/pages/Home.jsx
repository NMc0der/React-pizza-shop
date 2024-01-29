import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home w-full h-[90vh] flex justify-center items-start flex-col bg-center bg-no-repeat bg-cover">
      <div className="headerContainer w-auto bg-[url('https://aznypdpizza.com/wp-content/uploads/2023/05/nypd-cheese-pizza.jpg')] ">
        <h1 className="justify-center items-center text-[90px] font-[50] text-black">
          Noah's Pizzeria
        </h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}
