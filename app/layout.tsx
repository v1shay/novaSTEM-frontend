import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BackgroundShader } from "@/components/BackgroundShader"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova Stem - Production Ready",
  description: "FAANG-level production-ready frontend foundation for Nova Stem",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <BackgroundShader />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
