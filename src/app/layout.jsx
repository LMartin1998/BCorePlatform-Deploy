'use client'
import './globals.css';
import React, {useState} from 'react';
import Sidebar from './Components/Sidebar';

// export const metadata = {
//   title: 'Project Manager',
//   description: 'Development platform',
// }

export default function RootLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <html lang="en">
      <body>
        <Sidebar children={children} show={showSidebar} setter={setShowSidebar}/>
      </body>
    </html>
  );
}
