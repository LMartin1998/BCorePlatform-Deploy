const { createContext } = require("react");
const { Theme } = require("../LocalStorage/Theme");

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { theme, setTheme, option, setOption, updateTheme } = Theme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme, option, setOption, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
