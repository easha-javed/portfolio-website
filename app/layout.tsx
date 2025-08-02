import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

// ✅ Update the metadata here
export const metadata: Metadata = {
  title: 'Easha Javed',
  description: 'Portfolio of Easha Javed',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
