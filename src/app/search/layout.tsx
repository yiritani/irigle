import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchHeader from "@/components/Search/SearchHeader";


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
