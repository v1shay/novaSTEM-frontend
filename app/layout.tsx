import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import dynamic from "next/dynamic"

const BackgroundShader = dynamic(
  () => import("@/components/BackgroundShader").then((mod) => mod.BackgroundShader),
  { ssr: false }
)

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" })

export const metadata: Metadata = {
  title: "NovaSTEM",
  description: "FAANG-level production-ready frontend foundation for Nova Stem",
  icons: {
    icon: "/images/novastem-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${syne.variable} ${inter.className}`}>
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
