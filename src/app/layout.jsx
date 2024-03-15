"use client";
import "./globals.css";
import { GridProvider } from "./contexts/GridContext";
import { UserProvider } from "./contexts/UserContext";
import { FilesProvider } from "./contexts/FilesContext";
import { TeamsProvider } from "./contexts/TeamsContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// export const metadata = {
//   title: 'Project Manager',
//   description: 'Development platform',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <UserProvider>
              <GridProvider>
                <FilesProvider>
                  <TeamsProvider>{children}</TeamsProvider>
                </FilesProvider>
              </GridProvider>
            </UserProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
