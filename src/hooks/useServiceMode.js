import { useContext } from "react";
import { ServiceModeContext } from "../context/ServiceModeContext";

export const useServiceMode = () =>
  useContext(ServiceModeContext);