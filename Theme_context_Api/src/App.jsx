import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode , setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme =() => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark") // this will remove the light and dark field prevent default in the document of html 
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>  {/*  now these function lightTheme/darkTheme are not defined , so we can define these function here with the same name */}
    <div className="flex flex-wrap min-h-screen items-center">    {/* and the functionality will go directly into these function */}
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
