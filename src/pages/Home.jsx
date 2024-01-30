import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home maxSmall:justify-center maxSmall:items-center  bg-[url('https://aznypdpizza.com/wp-content/uploads/2023/05/nypd-cheese-pizza.jpg')]  w-full h-[90vh] flex justify-center items-start flex-col bg-center bg-no-repeat bg-cover">
      <div className="headerContainer  w-auto ">
        <h1 className="justify-center items-center text-[90px] font-[50] text-black">
          Noah's Pizzeria
        </h1>
        <p className=" p-0 text-[40px] font-light text-black">
          PIZZA TO FIT ANY TASTE
        </p>
        <Link to="/menu">
          <button className=" hover:bg-[#07090a] hover:cursor-pointer hover:transition hover:delay-[.3s] hover:ease-in text-black border-none rounded-[5px] cursor-pointer justify-center bg-[#121619] h-[50px] w-[180px] text-white no-underline text-[20px]">
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

//
