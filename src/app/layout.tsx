import type { Metadata } from 'next'
import './globals.css'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Irigle',
  description: 'Individual development and design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'relative min-h-screen'}>
        {children}
        <Footer />

      </body>
    </html>
  )
}
