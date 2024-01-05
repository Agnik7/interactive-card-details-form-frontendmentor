import React from 'react'

export default function Back({cvc}) {
  return (
    <section className='w-[18rem] xxxs:w-[22rem] xxs:w-[26rem] xs:w-[28rem] h-[15.3rem] bg-card-back m-0 self-start scale-[0.64] relative top-[6.4rem] sm:top-[9rem] lg:top-auto sm:scale-100 sm:self-end lg:self-auto lg:mr-[1rem] flex items-center justify-end rounded-xl shadow-2xl'>
        <h2 className='font-space mr-[3.5rem] font-light'>{cvc?cvc:"000"}</h2>
    </section>
  )
}
