import { createContext, useState } from "react";
import { Sidebar } from "../localStorage/Sidebar";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const { active, setActive } = Sidebar();

  return (
    <SidebarContext.Provider value={{ active, setActive }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarContext, SidebarProvider };
