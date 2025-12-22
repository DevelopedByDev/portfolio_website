import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"

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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="lg:ml-48 min-h-screen px-6 md:px-10 lg:px-16 py-8 max-w-2xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
