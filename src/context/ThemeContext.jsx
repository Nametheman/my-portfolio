// ThemeContext.js
import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  //   const toggleTheme = () => {
  //     setCurrentTheme(currentTheme === isDarkTheme ? isDarkTheme : false);
  //   };

  const changeToLightTheme = () => {
    setIsDarkTheme(false);
  };

  const changeToDarkTheme = () => {
    setIsDarkTheme(true);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        changeToDarkTheme,
        changeToLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
