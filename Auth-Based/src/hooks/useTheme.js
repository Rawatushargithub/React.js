import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function useTheme() {
  return useContext(ThemeContext);
}
