"use client";

import { createContext, useState } from "react";

const DocContext = createContext();

function DocProvider({ children }) {
  const [filtering, setFiltering] = useState("");

  return (
    <DocContext.Provider value={{ filtering, setFiltering }}>
      {children}
    </DocContext.Provider>
  );
}

export { DocContext, DocProvider };
