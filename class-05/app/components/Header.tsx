import React from 'react'

const Header = () => {
  return (
    <div>
        <header >
        <nav className="flex w-full h-[13vh] gap-10 bg-black items-center">
            <div className="bg-purple-800 w-36 h-10 text-white p-2 ml-4">Logo</div>
            <div className="bg-blue-600 w-[70%] h-10 p-2 text-white">Heading</div>
            <div className="flex gap-6 w-4/5 justify-end">
            <div className="bg-green-600 w-32 h-10 p-2 text-white">About</div>
            <div className="bg-yellow-600 w-32 h-10 p-2 text-white">Contact</div>
            <div className="bg-red-600 w-32 h-10 p-2 text-white">Gallery</div>
            </div>
        </nav>
        </header>
    </div>
  )
}

export default Header