import { useState, useEffect } from "react";

export function Theme() {
  const initialState = {
    theme: null,
    option: 0,
  };

  const [key, setKey] = useState("theme");

  const [option, setOption] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem(key));
      return stored ? stored.option : initialState.option;
    }
  });

  const [theme, setTheme] = useState(() => {
    if (option !== undefined) {
      if (
        option == 0 &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      } else {
        return option == 1 ? "dark" : "light";
      }
    }
  });

  const updateTheme = (opt) => {
    setOption(opt);
    if (opt == 0) {
      setTheme(() =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    } else {
      setTheme(opt == 1 ? "dark" : "light");
    }
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ theme: theme, option: option }));
  }, [key, theme, option]);

  return { theme, setTheme, option, setOption, updateTheme };
}
