import React, { useState, createContext } from "react";

export const ThemeContext = createContext();
export default function ThemeProvider(props){

    const [darkMode, setDarkMode] = useState(false)
    
    return (
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {props.children}
      </ThemeContext.Provider>
    )
}
