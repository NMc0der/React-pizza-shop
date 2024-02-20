import React from "react";
import { MenuList } from "../data/MenuList";
import MenuItem from "../components/MenuItem";
export function Menu() {
  return (
    <div className="menu w-full h-auto flex justify-center items-center flex-col">
      <h1 className="menuTitle font-cursive text-[60px]">Our Menu</h1>
      <div className="menuList w-[70vw] h-auto grid grid-cols-3 place-items-center">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
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
