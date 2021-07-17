import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

const useAlerts = () => {
    return useContext(AlertContext)
}

export default useAlerts