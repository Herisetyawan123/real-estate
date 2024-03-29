import './globals.css'
import type { Metadata } from 'next'
import ReduxProvider from '@/redux/provider'
import { ubuntu } from '@/components/style/theme';
import Navbar from '@/components/organisme/navbar';

export const metadata: Metadata = {
  title: 'Real Estate - Jember',
  description: 'Investing In Your Future One Home At A Time',
  authors: {
    url: 'https://heri-setyawan.vercel.app/',
    name: 'Heri Setyawan',
  },
  keywords: ['real estate', 'estate', 'properti', 'apartement'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="sFnsk503vbs7hU7hRn36fNxQ5YfHYgPZDaULrjA7Sk4" />
      <body className={ubuntu.className}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
