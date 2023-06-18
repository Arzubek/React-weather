import React from 'react'
import clsx from 'clsx'
import useContextHook from '../../../hook/useContextHook';


const Body = () => {
    const { mode, language,weatherText, futureWeather, getWeekdays } = useContextHook();
    console.log(futureWeather);
    return (
        <div className={clsx(
            "mt-[15px] py-7 px-9 rounded-xl shadow-dark flex items-center",
            mode === "light"
                ? "bg-white"
                : "bg-[#4F4F4F]"
        )}>
            <div className='grid grid-cols-[repeat(3,1fr)] max-md:grid-cols-1 gap-5 justify-center items-center w-[100vw]'>

                {futureWeather.map((el, i) => (
                    <div key={el.date} className={clsx(
                        ' py-5 pl-4 pr-9 rounded-xl flex flex-col justify-center items-center',
                        mode === "light"
                            ? "bg-[#4793FF33]"
                            : "bg-[#2E3035]"
                    )}>
                        <h1 className={clsx("text-lg", mode === "light" ? "text-black" : "text-white")}>{getWeekdays(language)[i]}</h1>
                        <p className='text-[#939CB0]'>{el.date.split("-").slice(-1).reverse().join("-")+" "}May</p>
                        <div className='flex flex-col items-center'>
                            <img src={el.day.condition.icon} alt="weather" />
                            <h2 className={clsx(mode === "light" ? "text-black" : "text-white")}>{language === "en" ? 'Max: ' : "Jokari: "} {el.day.maxtemp_c}°C</h2>
                            <p className='text-[#939CB0]'>{language === "en" ? 'Min:' : "Tomen'i"} {el.day.mintemp_c}°C</p>
                            <p className='text-[#939CB0] text-[14px]'>{language === "en" ? el.day.condition.text : weatherText(el.day.condition.text)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body