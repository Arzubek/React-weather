import axios from "axios";
import React from "react";
import { Header, CurrentSection, FutureWeather } from "./components";
import { AppProvider } from "./store/AppProvider";
import { API_KEY } from "./utils/key";
import Loading from "./components/loading/Loading";
import Error from "./components/error/Error";
import NotFound from "./components/notfound/NotFound";
import { getWeekdays } from "./utils/daysOfWeek";
import { weatherText } from "./utils/weatherText";
import clsx from "clsx";


function darkModeLight() {
  return localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
}

function handleLanguage() {
  return localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
}

const App = () => {
  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [futureWeather, setFutureWeather] = React.useState([]);

  const [mode, setMode] = React.useState(() => darkModeLight());
  const [language, setLanguage] = React.useState(() => handleLanguage())

  const [selectCity, setSelectCity] = React.useState("nukus");

  const getCurrentWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      if (response.status === 200) {
        setCurrentWeather(response.data);
        setError(null)
      }

    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getFutureWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`
      );

      if (response.status === 200) {
        setError(null);
        setFutureWeather(response.data.forecast.forecastday)
      }

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getCurrentWeather(selectCity);
    getFutureWeather(selectCity);
  }, [selectCity]);

  const values = {
    currentWeather,
    selectCity,
    setSelectCity,
    futureWeather,
    setFutureWeather,
    mode,
    setMode,
    language,
    setLanguage,
    getWeekdays,
    weatherText
  };

  return (
    <AppProvider.Provider value={values}>
      <div className={clsx("min-h-screen", mode === "light" ? "bg-white" : "bg-slate-900")}>
        <Header />
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : currentWeather ? (
          <CurrentSection />
        ) : (
          <NotFound />
        )}
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : currentWeather ? (
          <FutureWeather />
        ) : (
          <NotFound />
        )}
        
      </div>
    </AppProvider.Provider>
  );
};

export default App;
