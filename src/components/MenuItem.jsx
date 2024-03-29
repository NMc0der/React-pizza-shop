import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem rounded-[15px] w-[300px] h-[350px] m-[20px] shadow-[0px_3px_15px_rgba(0,0,0,0.2)] hover:shadow-[0px_3px_15px_rgba(0,0,0,0.5)] hover:transition-[.3s] hover:ease-in hover:cursor-pointer ">
      <div
        className="rounded-tl-[15px] rounded-tr-[15px] w-full h-[200px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1 className="ml-[20px]  text-[30px] font-bold "> {name} </h1>
      <p className="ml-[20px]">${price}</p>
    </div>
  );
}

export default MenuItem;
