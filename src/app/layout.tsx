import './globals.css'
import type { Metadata } from 'next'
import ReduxProvider from '@/redux/provider'
import { ubuntu } from '@/components/style/theme';

export const metadata: Metadata = {
  title: 'Real Estate - Jember',
  description: 'Investing In Your Future One Home At A Time',
  authors: {
      url: 'https://heri-setyawan.vercel.app/',
      name: 'Heri Setyawan',
  },
  keywords: ['real estate', 'estate', 'properti', 'apartement']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
