import React from "react";
import Select from "react-select";
import useContextHook from "../../../hook/useContextHook";

const SelectCity = () => {
  const [selectedCity, setSelectedCity] = React.useState(null);

  const QQCities = ["Nukus", "Kungrad", "Beruni", "Shumanay", "Manghit", "Muynoq", "Takhiatosh", "Turtkul", "Kegeyli"]

  const { selectCity, setSelectCity, mode } = useContextHook();

  const cities = QQCities.map((el) => ({
    value: {
      city: el,
    },
    label: el,
  }));

  const handleSelectCity = (value) => {
    setSelectedCity(value);
    setSelectCity(value.label);
  };

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: mode === "light" ? "rgba(71, 147, 255, 0.2)" : "#4F4F4F",
      color: mode === "light" ? "#000" : "#fff",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor:
          mode === "light" ? "#fff" : "#4F4F4F",
        color: mode === "light" ? "" : "#fff",
      };
    },
    singleValue: (provided) => ({
      ...provided,
      color: mode === "light" ? "#000" : "#fff",
    }),
  };

  return (
    <div>
      <Select
        options={cities}
        className="w-56 max-sm:w-[140px]"
        value={selectedCity}
        onChange={handleSelectCity}
        styles={colourStyles}
      />
    </div>
  );
};

export default SelectCity;
