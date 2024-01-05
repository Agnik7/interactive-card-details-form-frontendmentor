import React from 'react';
import cardLogo from '../../assets/images/card-logo.svg';
export default function Front({name, account, month, year}) {
  return (
    <section className='w-[18rem] xxxs:w-[22rem] xxs:w-[26rem] xs:w-[28rem] h-[15.3rem] border-none outline-none bg-card-front m-0 self-end scale-[0.64] sm:scale-100 sm:self-start lg:self-auto relative top-[9.7rem]  sm:top-[6.5rem] lg:top-auto lg:mb-[2.3rem] lg:mr-[4.5rem] xl:mr-[6.8rem] py-[1.7rem] px-[2rem] z-50 rounded-xl shadow-2xl'>
        <img src={cardLogo} alt="Card Logo" />
        <div className='mt-[3.8rem] flex flex-wrap justify-between'>
            <h2 className='font-space w-full mb-[1.5rem] text-[1rem] xxxs:text-[1.2rem] xxs:text-[1.4rem] xs:text-[1.7rem] font-normal tracking-[0.2rem]'>{account?account:"0000 0000 0000 0000"}</h2>
            <h3 className='font-space font-light uppercase text-[0.8rem] xxxs:text-[1rem] '>{name?name:"JANE APPLESEED"}</h3>
            <div className='ml-auto flex items-center'>
                <h3 className='font-space font-light text-[0.8rem] xxxs:text-[1rem] uppercase ml-auto'>{month?month:"00"}</h3>
                <span className='font-light'>/</span>
                <h3 className='font-space font-light text-[0.8rem] xxxs:text-[1rem] uppercase ml-auto'>{year?year:"00"}</h3>
            </div>
        </div>
    </section>
  )
}
