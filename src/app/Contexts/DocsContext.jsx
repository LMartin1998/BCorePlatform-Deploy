"use client";

import { createContext, useState } from "react";

const DocContext = createContext();

function DocProvider({ children }) {
  const [filter, setFilter] = useState({});
  const updateFilter = () => {};    

  return (
    <DocContext.Provider value={{ filter, updateFilter }}>
      {children}
    </DocContext.Provider>
  );
}

export { DocContext, DocProvider };
