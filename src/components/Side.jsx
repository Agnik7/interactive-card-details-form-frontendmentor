import React from 'react';
import Front from './Card/Front';
import Back from './Card/Back';
export default function Side({name, account, month, year,cvc}) {
  return (
    <aside className='w-1/2 h-full flex flex-col justify-center items-end text-white'>
        <Front name={name} account={account} month={month} year={year} />
        <Back cvc={cvc} />
    </aside>
  )
}
