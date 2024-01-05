import React from 'react';
import Front from './Card/Front';
import Back from './Card/Back';
export default function Side({name, account, month, year,cvc}) {
  return (
    <aside className='w-fit -mt-[0.7rem] sm:mt-auto sm:w-3/5  xl:w-1/2 h-4/5 lg:h-full flex flex-col justify-center items-end text-white'>
        <Front name={name} account={account} month={month} year={year} />
        <Back cvc={cvc} />
    </aside>
  )
}
