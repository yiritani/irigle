import React from 'react'
import Link from 'next/link'
import WebSearchResult from '@/components/Result/WebSearchResult'

interface Props {
  params: Record<string, unknown>
  searchParams: {
    searchTerm: string
  }
}

export default async function WebSearch (props: Props) {
  const { searchParams } = props
  const response = await fetch(`
  https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
  `)
  if (!response.ok) throw new Error('API Error')
  const searchResult = await response.json()
  const results = searchResult.items
  const searchInformation = searchResult.searchInformation
  if (!results) {
    return (
      <div className={'flex flex-col justify-center items-center pt-10'}>
        <h1 className={'text-3xl mb-4'}>Nothing found</h1>
        <p className={'text-lg'}>
          Try different keywords or remove search filters
          <Link href={'/'} className={'text-blue-500'}>
            Home
          </Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {results && <WebSearchResult searchInformation={searchInformation} results={results} />}
    </>
  );
}
