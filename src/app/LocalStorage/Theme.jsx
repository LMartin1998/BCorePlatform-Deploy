import { useState } from "react";

export function Theme() {
  const initialState = {
    theme: "light",
  };

  const [key, setKey] = useState("theme");

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedState = JSON.parse(localStorage.getItem(key));
      return storedState ? storedState.theme : initialState.theme;
    }
    return initialState.theme;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ theme: theme }));
  }, [key, theme]);

  return { theme, setTheme };
}
