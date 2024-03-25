import { useEffect, useState } from "react";

export default function Files() {
  const [initialState, setInitialState] = useState({
    designMain: 0,
    mainType: 0,
    designChildren: 0,
    childrenType: 0,
  });

  const [key, setKey] = "filesKey";

  const [designMain, setDesignMain] = useState(() => {
    if (typeof window !== "undefined") {
      const storedState = JSON.parse(localStorage.getItem(key));
      return storedState ? storedState.designMain : initialState.designMain;
    }
    return initialState.designMain;
  });
}
