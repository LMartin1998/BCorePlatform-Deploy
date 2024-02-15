"use client";
import "./globals.css";
import { GridProvider } from "./contexts/GridContext";
import { UserProvider } from "./contexts/UserContext";
import { FilesProvider } from "./contexts/FilesContext";

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
            <FilesProvider>{children}</FilesProvider>
          </GridProvider>
        </UserProvider>
      </body>
    </html>
  );
}
