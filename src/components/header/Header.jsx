import React from "react";
import Logo from "./logo/Logo";
import SelectCity from "./select/SelectCity";
import useContextHook from "../../hook/useContextHook";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const {language, setLanguage , setMode, mode} = useContextHook();

  const handleMode = () => {
    if(mode === "light"){
      localStorage.setItem("mode", "dark");
      setMode("dark")
      return
    }
    if(mode === "dark"){
      localStorage.setItem("mode", "light");
      setMode("light")
      return
    }
  }

  const handleLang = () => {
    if(language === "en"){
      localStorage.setItem("lang", "qq");
      setLanguage("qq")
      return
    }
    if(language === "qq"){
      localStorage.setItem("lang", "en");
      setLanguage("en")
      return
    }
  }

  return (
    <header className="py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center max-sm:gap-3 gap-5">
          <button onClick={handleLang} className="text-[#4793FF] max-sm:text-[20px] text-[25px]">
                {language === "en" ? "en" : "qq"}
            </button>
            <button onClick={handleMode} className="text-[#4793FF] max-sm:text-[20px] text-[25px]">
                {mode === "light" ? (<BsFillSunFill/>) : (<BsMoonStarsFill/>)}
            </button>
          <SelectCity />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
