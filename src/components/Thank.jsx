import React from 'react';
import completeImg from '../assets/images/icon-complete.svg';
export default function Thank({name,setName, account, setAccount, month, setMonth, year, setYear, cvc, setCvc, confirm, setConfirm}) {
    const handleContinue = ()=>{
        setName('');
        setAccount('');
        setMonth('');
        setYear('');
        setCvc('');
        setConfirm(!confirm);
    }
  return (
    <section className='w-1/2 pt-[7.4rem] pr-[7rem] flex flex-col items-center'>
        <img src={completeImg} alt="Complete" />
        <div className='w-fullmt-[2rem] mb-[3rem]'>
            <h2 className='mb-[1rem] w-full text-center font-space text-[1.7rem] font-medium'>THANK YOU!</h2>
            <p className='font-space w-full text-center text-[1.1rem] text-dark-violet'>We've added your card details</p>
        </div>
        <button className='w-[24rem] h-[3.3rem] bg-very-dark-violet text-light-violet font-space rounded-lg my-[2rem] hover:bg-dark-violet' onClick={handleContinue}>Continue</button>
    </section>
  )
}
