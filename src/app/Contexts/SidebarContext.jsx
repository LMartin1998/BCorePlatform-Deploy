import { createContext } from "react";

const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
  const [active, setActive] = useState("0");

  return (
    <SidebarContext.Provider values={{ active, setActive }}>
      {children}
    </SidebarContext.Provider>
  );
}
