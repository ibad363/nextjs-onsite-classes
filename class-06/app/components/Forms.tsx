import React from 'react'

const Forms = () => {
  return (
    <div>
       <h1 className='text-4xl text-center uppercase mt-5'>Enter your Details</h1>

       <form className='flex flex-col items-center gap-3'>
            <input className='border-2 border-slate-700 mt-5 p-2 rounded-xl' type="email" placeholder='Enter Your Email'/>
            <input className='border-2 border-slate-700 p-2 rounded-xl' type="password" placeholder='Enter Your Password'/>
            <button className='bg-blue-500 text-white px-7 py-3 rounded-xl'>Submit Form</button>
       </form>
    </div>
  )
}

export default Forms