const { createContext } = require("react");
const { Theme } = require("../LocalStorage/Theme");

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { theme, setTheme } = Theme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
