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
          <main className="lg:ml-44 min-h-screen px-5 md:px-8 lg:px-12 py-6 max-w-xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
