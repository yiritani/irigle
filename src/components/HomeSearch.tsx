"use client";
import React from 'react';
import {useRouter} from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";

type Props = {
};

export function HomeSearch(props: Props) {
  const router = useRouter();
  const [input, setInput] = React.useState('');
  const [randomSearchLoading, setRandomSearchLoading] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    try {
      const randomWord = await fetch('https://random-word-api.herokuapp.com/word')
      const searchTerm = await randomWord.json();
      router.push(`/search/web?searchTerm=${searchTerm}`);
    } finally {
      setRandomSearchLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='relative rounded-full '>
        <FaSearch className={'h-6 w-6 text-gray-500 absolute top-3 left-3'}/>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className={'hover:shadow-md transition-shadow focus-within:shadow-md border border-gray-200 rounded-full px-64 py-3 focus:outline-none pl-10 sm:max-w-xl lg:max-w-2xl'} placeholder="Search"/>
        <FaMicrophone className={'h-6 w-6 text-gray-500 absolute top-3 right-3 cursor-pointer'}/>
        <div className='flex justify-center mt-4 py-2 space-x-4 flex-col sm:flex-row'>
          <button className='bg-gray-200 text-black px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow mt-4'>Google Search</button>
          <button disabled={randomSearchLoading} onClick={randomSearch} className='bg-gray-200 text-black px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow mt-4'>
            {randomSearchLoading ? (
              <img src='Reload-1.3s-200px.svg' alt='Loading' className='disabled:opacity-80 h-6 text-center bg-transparent'/>
              ) : (
                "I'm Feeling Lucky"
              )}
            </button>

        </div>
      </form>
    </>
  );
};
