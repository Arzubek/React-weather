import React from "react";
import LogoImg from "../../../assets/logo/logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img className="max-sm:w-[35px] max-md:w-[50px]" src={LogoImg} alt="weather-img" />
      <h1 className="text-[#4793FF] max-sm:text-[15px] max-md:text-2xl text-3xl uppercase font-bold">React weather</h1>
    </div>
  );
};

export default Logo;
