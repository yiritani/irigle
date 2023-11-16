import React from 'react';
import {SearchResult, SearchInformation} from "@/types/searchResult";
import Link from "next/link";
import Parser from 'html-react-parser';

type Props = {
  results: SearchResult[];
  searchInformation: SearchInformation;
}
function WebSearchResult(props: Props) {
  const {results, searchInformation} = props;



  return (
    <div className={'w-full max-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:p;-52'}>
      <p className={'text-gray-600 text-sm mb-5 mt-3'}>
        About {searchInformation.formattedTotalResults} results ({searchInformation.formattedSearchTime} seconds)
      </p>
      {results.map((result) => (
        <div className={'max-w-xl mb-8'} key={result.link}>
          <div className={'group flex flex-col'}>
            <Link className={'text-sm truncate'} href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link className={'group-hover:underline decoration-blue-800 text-blue-800'} href={result.link}>
              {result.title}
            </Link>
          </div>
          <p className={'text-sm truncate font-medium text-gray-600 line-clamp-2'}>
            {Parser(result.htmlSnippet)}
          </p>
        </div>
      ))}

    </div>
  );
}

export default WebSearchResult;