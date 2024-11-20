"use client"
import {useState} from 'react'

const State = () => {
    const [count,setCount] = useState(10)
  return (
    <div className='grid gap-y-2 border-8 border-x-slate-500 border-y-yellow-300 text-center p-6 rounded-lg'>
        <h1>Count is {count}</h1>
        <div className='flex justify-center gap-2'>
              <button onClick={()=>setCount(count + 1)} className='px-3 bg-slate-500 text-white rounded-lg'>+</button>
              <button onClick={()=>setCount(count - 1)} className='px-3 bg-slate-500 text-white rounded-lg'>-</button>
              
        </div>
        <button onClick={()=>setCount(0)} className='px-2 bg-slate-500 text-white rounded-lg'>Reset</button>
    </div>
  )
}

export default State