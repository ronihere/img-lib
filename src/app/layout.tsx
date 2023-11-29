import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './components/sideNav'
import TopNav from './components/TopNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
          <TopNav/>
        <div className='flex'>
          <SideNav />
          <div className='w-full p-6'>
        {children}
          </div>
        </div>
        </body>
    </html>
  )
}
