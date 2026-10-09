import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'For Diya, With Love',
  description: 'A cinematic birthday memory website just for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-midnight text-warm-ivory">
        {children}
      </body>
    </html>
  )
}
