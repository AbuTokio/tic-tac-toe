import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "@/app/globals.css"
import Navbar from "@/components/ui/Navbar"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
})
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "A local two-player Tic-Tac-Toe game.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-space font-sans text-ink antialiased">
        {/* soft cosmic glow, pure Tailwind arbitrary value */}
        <div className="min-h-screen bg-[radial-gradient(80%_60%_at_50%_-10%,#10193400_0%,#101934_0%,#070a14_55%)]">
          <Navbar />
          <div className="px-6 pb-16 pt-6">{children}</div>
        </div>
      </body>
    </html>
  )
}
