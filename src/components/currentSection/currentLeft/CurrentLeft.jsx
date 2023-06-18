import React from "react";
import useContextHook from "../../../hook/useContextHook";
import clsx from "clsx";

const CurrentLeft = () => {
  const {
    currentWeather: { current, location },
    language,
    mode
  } = useContextHook();
  
  return (
    <div className={clsx(
      "flex flex-col gap-4 flex-1 py-7 px-9 rounded-3xl shadow-dark",
      mode === "light" 
      ? "bg-white"
      : "bg-[#4F4F4F]"
    )}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-7xl max-lg:text-4xl text-[#4793FF]">{current.temp_c}°С</h1>
          <h1 className={clsx(
            "lg:text-4xl capitalize",
            mode === "light" ? "text-black" : "text-white"
            )}>{language === "en" ? "Today" : "Bugin'"}</h1>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={`${current.condition.icon}`}
            alt="Image"
            className="w-[125px] h-[125px]"
          />
        </div>
      </div>
      <div>
        <p className="text-[#939CB0] text-xl ">
          {language === "en" ? "Time: " : "Waqit: "} 
          {new Date(location.localtime).toLocaleString("uz", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p className="text-[#939CB0] text-xl">
        {language === "en" ? "Town: " : "Qala: "} {location.name} 
        </p>
        <p className="text-[#939CB0] text-xl">Region: {location.region}</p>
      </div>
    </div>
  );
};

export default CurrentLeft;
