import React from "react";
import CloudImage from "../../../assets/img/cloud.png";
import { Wind, Temp, Asadki, Pressure } from "../../../assets";
import useContextHook from "../../../hook/useContextHook";
import clsx from "clsx";

const CurrentRight = () => {
  const {
    currentWeather: { current },
    language,
    mode
  } = useContextHook();

  return (
    <div className={clsx(
      "py-7 px-9 rounded-3xl shadow-dark flex-[2] relative overflow-hidden flex items-center",
      mode === "light"
        ? "bg-white"
        : "bg-[#4F4F4F]"
    )}>
      <img
        src={CloudImage}
        alt="CloudImage"
        className="inline-block absolute -top-1 right-0 max-md:w-[380px] max-md:h-[152px]"
      />
      <div className="flex flex-col gap-3">
        {/* Temp */}
        <div className="flex items-center gap-5 relative z-10">
          <div className="flex items-center gap-3 w-[180px]">
            <span className={clsx(
              "flex items-center justify-center w-12 h-12 rounded-full bg-white",
              mode === "light" ? "shadow-dark" : "shadow-light"
            )}>
              <img src={Temp} alt="image" />
            </span>
            <p className="text-[#939CB0]">{language === "en" ? "Temperature" : "Harorat"}</p>
          </div>
          <div>
            <p className={mode === "light" ? "text-[1111]" : "text-[#ffff]"}>
              {language === "en" ? "Feels like: " : "Sıyaqlı sezim etedi: "}{current.feelslike_c} °С
            </p>
          </div>
        </div>
        {/* Pressure */}
        <div className="flex items-center gap-5 relative z-10">
          <div className="flex items-center gap-3 w-[180px]">
            <span className={clsx(
              "flex items-center justify-center w-12 h-12 rounded-full bg-white",
              mode === "light" ? "shadow-dark" : "shadow-light"
            )}>
              <img src={Pressure} alt="image" />
            </span>
            <p className="text-[#939CB0]">{language === "en" ? "Pressure" : "Basım"} </p>
          </div>
          <div>
            <p className={mode === "light" ? "text-[1111]" : "text-[#ffff]"}>
              {current.pressure_mb} mm {language === "en" ? "of mercury" : "sinap"} 
            </p>
          </div>
        </div>
        {/* Precipitation */}
        <div className="flex items-center gap-5 relative z-10">
          <div className="flex items-center gap-3 w-[180px]">
            <span className={clsx(
              "flex items-center justify-center w-12 h-12 rounded-full bg-white",
              mode === "light" ? "shadow-dark" : "shadow-light"
            )}>
              <img src={Asadki} alt="image" />
            </span>
            <p className="text-[#939CB0]">{language === "en" ? "Precipitation" : "Jawın"}</p>
          </div>
          <div>
            <p className={mode === "light" ? "text-[1111]" : "text-[#ffff]"}>
              {current.precip_mm} mm
            </p>
          </div>
        </div>
        {/* Wind */}
        <div className="flex items-center gap-5 relative z-10">
          <div className="flex items-center gap-3 w-[180px]">
            <span className={clsx(
              "flex items-center justify-center w-12 h-12 rounded-full bg-white",
              mode === "light" ? "shadow-dark" : "shadow-light"
            )}>
              <img src={Wind} alt="image" />
            </span>
            <p className="text-[#939CB0]">{language === "en" ? "Wind" : "Samal"}</p>
          </div>
          <div>
            <p className={mode === "light" ? "text-[1111]" : "text-[#ffff]"}>
              {current.wind_kph} km/{language === "en" ? "hour" : "saat"} | {current.wind_mph} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRight;
