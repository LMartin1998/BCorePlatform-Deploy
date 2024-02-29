"use client";
import "./globals.css";
import { GridProvider } from "./contexts/GridContext";
import { UserProvider } from "./contexts/UserContext";

// export const metadata = {
//   title: 'Project Manager',
//   description: 'Development platform',
// }

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <UserProvider>
                    <GridProvider>
                        {children}
                    </GridProvider>
                </UserProvider>
            </body>
        </html>
    );
}
