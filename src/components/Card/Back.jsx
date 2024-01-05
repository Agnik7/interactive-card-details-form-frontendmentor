import React from 'react'

export default function Back({cvc}) {
  return (
    <section className='w-[28rem] h-[15.3rem] bg-card-back mr-[1rem] flex items-center justify-end rounded-xl shadow-2xl'>
        <h2 className='font-space mr-[3.5rem] font-light'>{cvc?cvc:"000"}</h2>
    </section>
  )
}
