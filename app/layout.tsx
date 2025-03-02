import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: 'Divyansh Lalwani',
  description: 'Biomedical Engineering and Computer Science student at Johns Hopkins University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}