import React from 'react';

export default function Form({name,setName, account, setAccount, month, setMonth, year, setYear, cvc, setCvc, confirm, setConfirm}) {
  const formatCardNumber = (input) => {
    const digitsOnly = input.replace(/\D/g, '');
    const formattedNumber = digitsOnly.replace(/(\d{4})/g, '$1 ').trim();
    
    return formattedNumber;
  };
  return (
    <section className='w-screen md:w-3/5 lg:w-1/2 max-w-[20rem] sm:max-w-max pt-[5.5rem] pl-[1.2rem]  xl:pl-[7rem] my-[4rem] sm:my-[1rem] lg:my-[4rem] flex flex-col'>
        <label htmlFor="cardholder" className='mb-[0.5rem] font-space text-[0.8rem]'>CARDHOLDER NAME</label>
        <input type="text" name='cardholder' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='e.g. Jane Appleseed' className='w-full md:w-[29rem] h-[2.8rem] mb-[1.6rem] text-[1.1rem] outline-none border rounded-lg border-light-violet focus:border-dark-violet px-[1rem] font-space' required/>
        <label htmlFor="number" className='mb-[0.5rem] font-space text-[0.8rem]'>CARD NUMBER</label>
        <input type="text" name='number' minLength={19} maxLength={19} placeholder='e.g. 1234 5678 9123 0000' value={account} onChange={(e)=>{setAccount(formatCardNumber(e.target.value))}} className='w-full md:w-[29rem] h-[2.8rem] mb-[1.6rem] text-[1.1rem] outline-none border rounded-lg border-light-violet focus:border-dark-violet px-[1rem] font-space' required/>
        <div className='w-full  flex flex-col md:flex-row gap-[1.25rem]'>
            <div className='w-2/5 flex flex-wrap justify-between'>
                <label htmlFor="month" className='mb-[0.5rem] font-space text-[0.8rem]'>EXP. DATE (MM/YY)</label>
                <div className='w-full flex'>
                <input type="text" name="month" value={month} onChange={(e)=>{setMonth(e.target.value)}} className="mr-[0.6rem] w-[5rem] h-[2.8rem] text-[1.1rem] outline-none border rounded-lg border-light-violet focus:border-dark-violet px-[1rem] font-space" maxLength="2" placeholder="MM" required/>
                <input type="text" name="year" value={year} onChange={(e)=>{setYear(e.target.value)}} className='w-[5rem] h-[2.8rem] text-[1.1rem] outline-none border rounded-lg border-light-violet focus:border-dark-violet px-[1rem] font-space' minLength="2" maxLength="2" placeholder="YY" required/>
                </div>
            </div>
            <div className='w-2/5 flex flex-col md:px-[1rem]'>
                <label htmlFor="cvc" className='mb-[0.5rem] font-space text-[0.8rem] '>CVC</label>
                <input type="text" value={cvc} onChange={(e)=>{setCvc(e.target.value)}} className='w-full h-[2.8rem] text-[1.1rem] outline-none border rounded-lg border-light-violet focus:border-dark-violet px-[1rem] font-space' placeholder='e.g. 123'/>
            </div>
        </div>
        <button className='w-full md:w-[24rem] h-[3.3rem] bg-very-dark-violet text-light-violet font-space rounded-lg my-[2rem] hover:bg-dark-violet' onClick={()=>setConfirm(!confirm)}>Confirm</button>
    </section>
  )
}
