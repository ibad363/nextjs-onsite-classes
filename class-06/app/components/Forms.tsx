import React from 'react'

const Forms = () => {
  return (
    <div>
       <h1 className='text-4xl text-center'>Enter your Details</h1>
       <form className='flex flex-col items-center gap-3'>
            <input className='border-2 border-slate-700 mt-3 p-2 w-80' type="email" placeholder='Enter Your Email'/>
            <input className='border-2 border-slate-700 p-2 w-80' type="password" placeholder='Enter Your Password'/>
       </form>
       <button className=''>Submit Form</button>
    </div>
  )
}

export default Forms