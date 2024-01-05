import React from 'react';
import Front from './Card/Front';
import Back from './Card/Back';
export default function Side() {
  return (
    <aside className='w-1/2 h-full flex flex-col justify-center items-end text-white'>
        <Front />
        <Back />
    </aside>
  )
}
