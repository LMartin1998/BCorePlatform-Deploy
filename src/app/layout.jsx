"use client";
import "./globals.css";
import React, { useState } from "react";
import { GridProvider } from "./contexts/GridContext";

// export const metadata = {
//   title: 'Project Manager',
//   description: 'Development platform',
// }

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <GridProvider>
                    {children}
                </GridProvider>
            </body>
        </html>
    );
}
