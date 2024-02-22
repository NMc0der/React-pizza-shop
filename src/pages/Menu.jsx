import React from "react";
import { MenuList } from "../data/MenuList";
import MenuItem from "../components/MenuItem";
export function Menu() {
  return (
    <div className="menu w-full h-auto flex justify-center items-center flex-col">
      <h1 className="menuTitle font-cursive text-[60px]">Our Menu</h1>
      <div className="menuList xl:grid-cols-3 md:grid-cols-2  w-[90vw] h-auto grid grid-cols-1 place-items-center">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
