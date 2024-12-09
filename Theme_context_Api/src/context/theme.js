import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {} // we can pass the variables and functions to the context 
}) // as the context get created then it has the value present by default

export const ThemeProvider = ThemeContext.Provider

// we can also create custom hooks 
export default function useTheme(){     // becoz of this we don't need to import useContext and ThemeContext in the componets files
    return useContext(ThemeContext)     // this is just a way of organizing file structure 
}