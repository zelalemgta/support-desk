import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login | Support Desk',
  description: 'Login to Support Desk'  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-900 sm:bg-blue-950 sm:bg-gradient-to-r sm:from-gray-800 sm:to-blue-900 overflow-hidden"}>{children}</body>
    </html>
  )
}
