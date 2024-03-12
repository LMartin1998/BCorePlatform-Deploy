const { createContext } = require("react");
const { Theme } = require("../LocalStorage/theme");

const ThemeContext = createContext();

function ThemeProvider() {
  const { theme, setTheme } = Theme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}></ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
