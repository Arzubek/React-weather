import { useContext } from "react";
import { AppProvider } from "../store/AppProvider";

const useContextHook = () => {
  return useContext(AppProvider);
};

export default useContextHook;
