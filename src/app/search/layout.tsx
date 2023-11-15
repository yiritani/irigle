import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchHeader from "@/components/Search/SearchHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Irigle',
  description: 'Individual development and design',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
