import React,{useState} from 'react';
import './App.css';
import Side from './components/Side';
import Form from './components/Form';
import Thank from './components/Thank';
function App() {
  const [name,setName] = useState('');
  const [account,setAccount] = useState('');
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [confirm,setConfirm] = useState(false);
  return (
    <main className="min-h-screen w-screen flex justify-center items-center sm:items-stretch bg-bg-main-mobile sm:bg-bg-main-desk bg-mobile sm:bg-tablet lg:bg-desk bg-no-repeat">
      <div className='w-fit sm:w-full max-w-[90rem] flex flex-wrap lg:flex-nowrap items-center justify-center'>
        <Side name={name} account={account} month={month} year={year} cvc={cvc} />
        {
          !confirm?<Form name={name} setName={setName} account={account} setAccount={setAccount} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} confirm={confirm} setConfirm={setConfirm} />
          :<Thank setName={setName} setAccount={setAccount} setMonth={setMonth} setYear={setYear} setCvc={setCvc} confirm={confirm} setConfirm={setConfirm} />
        }
      </div>
    </main>
  )
}

export default App
