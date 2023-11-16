import React from 'react';
import Link from "next/link";
import {PiDotsNineBold} from "react-icons/pi";


export function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className={'flex space-x-4 items-center'}>
        <Link href={'https://mail.google.com'} className={'hover:underline items-center'}>
          Gmail
        </Link>
        <Link href={'https://image.google.com'} className={'hover:underline items-center'}>
          Images
        </Link>
        <PiDotsNineBold 
        className={'h-6 w-6 text-gray-500 hover:bg-gray-200 rounded-full text-4xl items-center cursor-pointer'}/>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 transition-shadow'>Sign in</button>
      </div>
    </header>
  );
}
