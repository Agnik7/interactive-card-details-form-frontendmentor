import React from 'react';
import './App.css';
import Side from './components/Side';
function App() {
  return (
    <main className="min-h-screen w-screen flex justify-center bg-bg-main-mobile sm:bg-bg-main-desk bg-mobile sm:bg-desk bg-no-repeat">
      <div className='w-full max-w-[90rem] flex'>
        <Side />
      </div>
    </main>
  )
}

export default App
