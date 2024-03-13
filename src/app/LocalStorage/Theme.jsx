import { useState, useEffect } from "react";

export function Theme() {
  const [key, setKey] = useState("theme");

  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ theme: theme }));
  }, [key, theme]);

  return { theme, setTheme };
}
