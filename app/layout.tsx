import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SideBar from '@/components/sidebar'
import NavBar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stockify',
  description: 'AI driven stock predictor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-full">
            <div className="hidden md:flex flex-col fixed h-screen w-[250px]">
              <SideBar />
            </div>
            <div className="w-full md:ml-[250px] bg-[#F5F7F9] dark:bg-popover h-full">
              <NavBar />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
