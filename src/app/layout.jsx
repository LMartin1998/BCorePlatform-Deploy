"use client";
import "./globals.css";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { GridProvider } from "./contexts/GridContext";

// export const metadata = {
//   title: 'Project Manager',
//   description: 'Development platform',
// }

export default function RootLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <html lang="en">
            <body>
                <GridProvider>
                    <Sidebar
                        children={children}
                        show={showSidebar}
                        setter={setShowSidebar}
                    />
                </GridProvider>
            </body>
        </html>
    );
}
