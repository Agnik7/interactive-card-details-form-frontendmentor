import React from 'react';
import completeImg from '../assets/images/icon-complete.svg';
export default function Thank({setName,setAccount,setMonth,setYear,setCvc, confirm, setConfirm}) {
    const handleContinue = ()=>{
        setName('');
        setAccount('');
        setMonth('');
        setYear('');
        setCvc('');
        setConfirm(!confirm);
    }
  return (
    <section className='w-screen md:w-3/5 lg:w-1/2 pt-[5.5rem] pl-[1.2rem] xl:pl-[7rem] my-[4rem] sm:my-[1rem] lg:my-[4rem] flex flex-col items-center'>
        <img src={completeImg} alt="Complete" />
        <div className='w-fullmt-[2rem] mb-[3rem]'>
            <h2 className='mb-[1rem] w-full text-center font-space text-[1.7rem] font-medium'>THANK YOU!</h2>
            <p className='font-space w-full text-center text-[1.1rem] text-dark-violet'>We've added your card details</p>
        </div>
        <button className='w-full md:w-[24rem] h-[3.3rem] bg-very-dark-violet text-light-violet font-space rounded-lg my-[2rem] hover:bg-dark-violet' onClick={handleContinue}>Continue</button>
    </section>
  )
}
