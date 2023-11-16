'use client';
import React, {useEffect} from 'react';

type Props = {
  error: string;
  reset: () => void;
}
function Error(props: Props) {
  useEffect(() => {
    console.log(props.error);
  }, [props.error]);
  return (
    <div className={'flex flex-col justify-center items-center pt-10'}>
      <h1 className={'text-3xl mb-4'}>Something went wrong</h1>
      <button className={'text-blue-500'} onClick={() => props.reset}>Try again</button>

    </div>
  );
}

export default Error;