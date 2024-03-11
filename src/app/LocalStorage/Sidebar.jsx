import { useEffect, useState } from "react";

export function Sidebar() {
  const [initialState, setInitialState] = useState([
    {
      active: "0",
    },
  ]);

  const [key, setKey] = useState("sidebarKey");

  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") {
      const storedState = JSON.parse(localStorage.getItem(key));
      return storedState ? storedState.active : initialState.active;
    }
    return initialState.active;
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(key, JSON.stringify({ active: active }));
    }, 2000);
  }, [key, active]);

  return {
    active,
    setActive,
  };
}
