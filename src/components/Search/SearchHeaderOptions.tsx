'use client';

import React from 'react';
import {AiOutlineCamera, AiOutlineSearch} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

type Props = {}
function SearchHeaderOptions(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectTab = (tab: string) => {
    router.push(`/search/${tab}/?searchTerm=${searchParams.get('searchTerm')}`);
  }
  return (
    <div className={'flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'}>
      <div onClick={()=>selectTab('web')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineSearch className="text-md"/>
        <p>All</p>
      </div>
      <div onClick={()=>selectTab('image')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineCamera className="text-md"/>
        <p>Images</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
