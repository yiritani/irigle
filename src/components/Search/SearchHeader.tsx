import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import SearchBox from '@/components/Search/SearchBox';
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "@/components/Search/SearchHeaderOptions";

type Props = {}
function SearchHeader(props: Props) {
  return (
    <header>
      <div className={'flex w-full p-6 items-center justify-between'}>
        <Link href='/'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
            alt={'headerLogo'}
            width={120}
            height={40}
          />
        </Link>

        <div className={'flex space-x-4 items-center justify-between'}>
          <SearchBox />
        </div>
        <div className="flex ml-auto space-x-4 items-center justify-between hidden md:inline-flex">
          <RiSettings3Line class="header-icon"/>
          <TbGridDots class="header-icon"/>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow mt-4">
              Sign In
          </button>
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
