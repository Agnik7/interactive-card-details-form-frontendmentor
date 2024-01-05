import React from 'react';
import cardLogo from '../../assets/images/card-logo.svg';
export default function Front() {
  return (
    <section className='w-[28rem] h-[15.3rem] bg-card-front mb-[2.3rem] mr-[6.8rem] py-[1.7rem] px-[2rem] z-50 rounded-xl shadow-2xl'>
        <img src={cardLogo} alt="Card Logo" />
        <div className='mt-[3.8rem] flex flex-wrap justify-between'>
            <h2 className='font-space w-full mb-[1.5rem] text-[1.7rem] font-normal'>0000 0000 0000 0000</h2>
            <h3 className='font-space font-light uppercase'>JANE APPLESEED</h3>
            <div className='ml-auto flex items-center'>
                <h3 className='font-space font-light uppercase ml-auto'>00</h3>
                <span className='font-light'>/</span>
                <h3 className='font-space font-light uppercase ml-auto'>00</h3>
            </div>
        </div>
    </section>
  )
}
