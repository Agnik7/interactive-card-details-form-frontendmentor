import React,{useState} from 'react';
import './App.css';
import Side from './components/Side';
import Form from './components/Form';
function App() {
  const [name,setName] = useState('');
  const [account,setAccount] = useState('');
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');
  const [cvc, setCvc] = useState('')
  return (
    <main className="min-h-screen w-screen flex justify-center bg-bg-main-mobile sm:bg-bg-main-desk bg-mobile sm:bg-desk bg-no-repeat">
      <div className='w-full max-w-[90rem] flex'>
        <Side name={name} account={account} month={month} year={year} cvc={cvc} />
        <Form name={name} setName={setName} account={account} setAccount={setAccount} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} />
      </div>
    </main>
  )
}

export default App
