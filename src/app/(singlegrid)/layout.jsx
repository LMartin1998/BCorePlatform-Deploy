"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { GridProvider } from "../contexts/GridContext";
import { DocProvider } from "../contexts/DocsContext";

export default function GridLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <GridProvider>
        <DocProvider>
          <Sidebar
            children={children}
            show={showSidebar}
            setter={setShowSidebar}
          />
        </DocProvider>
      </GridProvider>
    </>
  );
}
