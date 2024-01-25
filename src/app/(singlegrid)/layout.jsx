"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { GridProvider } from "../contexts/GridContext";

export default function GridLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <GridProvider>
                <Sidebar
                    children={children}
                    show={showSidebar}
                    setter={setShowSidebar}
                />
            </GridProvider>
        </>
    );
}