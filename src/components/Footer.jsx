import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export function Footer() {
  return (
    <div className="footer w-full h-[200px] bg-[#121619] flex justify-center items-center flex-col pt-[10px]">
      <div className="socialMedia [&>svg]:text-[70px] [&>svg]:text-white m-[20px]  [&>svg]:cursor-pointer">
        <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p className="text-white"> &copy; 2024 Noahpizza.com</p>
    </div>
  );
}
