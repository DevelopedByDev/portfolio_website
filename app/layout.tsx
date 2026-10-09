import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divyansh Lalwani',
  description: 'Founder and CEO of LayerNorm, building Overlay.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-full max-w-[720px] mx-auto px-6 py-10 md:py-14">
          {children}
        </main>
      </body>
    </html>
  )
}
