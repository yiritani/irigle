"use client"

import {useRouter, useSearchParams} from "next/navigation";

import React from 'react';
import {RxCross2} from "react-icons/rx";
import {BsFillMicFill} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";

const SearchBox = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = React.useState(searchTerm || '');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      className="flex hover:shadow-lg border border-gray-200 rounded-full shadow-md px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl max-h-14 items-center"
      onSubmit={handleSubmit}
    >
      <input type={'text'} value={term} onChange={(e) => setTerm(e.target.value)} className={'w-full focus:outline-none'} />
      {term && (
        <RxCross2 onClick={() => setTerm('')} className="text-3xl text-gray-500 cursor-pointer sm:mr-2"/>
      )}
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 cursor-pointer sm:mr-2"/>
      <AiOutlineSearch onClick={handleSubmit} className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 cursor-pointer sm:mr-2"/>
    </form>
  );
};

export default SearchBox;
