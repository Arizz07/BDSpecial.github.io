import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useState } from 'react'

function Frst() {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleDate = (e) => {
    setDate(e.target.value)
    
  }
  const handlePage = () => {
    let selectedDate = "2002-07-22"
    console.log(date, selectedDate);
    if (date === selectedDate) {
      localStorage.setItem('birthDate', date);
      navigate('/Second');
    } else {
      alert('Please select birthdate ');
    }
  }
  return (
    <div className='main flex justify-center items-center'>
        <div className="welcome mt-25 w-100 h-64 rounded-md shadow-xl px-2 py-2 bg-linear-to-r/hsl from-indigo-500 to-teal-400">
            <h1 className='text-2xl my-2 font-bold text-white text-center winky-text'>Heyy!! Welcome..</h1>
            <div className='flex flex-col mt-8'>
            <span className="text-white roboto-text text-center p-2 ">Please enter Your BirthDate Below..!!!</span>

            <input className='bg-blue-100 outline-none p-2 mx-5 rounded-2xl' type="date" value={date} onChange={handleDate}/>
            <button onClick={handlePage} className='bg-orange-500 text-white rounded-2xl px-2 py-2 mt-4 m-5 font-bold hover:bg-white hover:text-orange-500 hover:transition-all hover:duration-100'>Let's Go!</button>
            </div>
        </div>
    </div>
  )
}

export default Frst