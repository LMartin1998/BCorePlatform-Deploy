import './globals.css'

export const metadata = {
  title: 'Project Manager',
  description: 'Development platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
