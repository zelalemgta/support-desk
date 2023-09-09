import '../globals.css'
import { Inter } from 'next/font/google'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Header from '../components/organisms/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Support Desk',
  description: 'Welcome to Support Desk',
}

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: { user } } = await supabase.auth.getUser()
  //Refactor this page to render Header in Page component rather than layout
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-300"}>
        <Header user={user} />
        {children}
      </body>
    </html>
  )
}
