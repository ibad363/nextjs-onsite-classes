import React from 'react'

const Gallery = () => {
  return (
    <>
      {/* Image Section 1 */}
      <div className='flex max-w-full px-10 h-[40vh] p-4 space-x-7 text-3xl'>
          <div className="bg-rose-800 w-1/3 h-[35vh] rounded-xl p-4 text-white">Image 1</div>
          <div className="bg-rose-800 w-1/3 h-[35vh] rounded-xl p-4 text-white">Image 2</div>
          <div className="bg-rose-800 w-1/3 h-[35vh] rounded-xl p-4 text-white">Image 3</div>
      </div>
      {/* Image Section 2 */}
      <div className='flex max-w-full px-10 p-4 space-x-7 text-3xl'>
        <div className='bg-fuchsia-400 w-1/2 h-[80vh] rounded-xl p-4'>Image 1</div>
        <div className='bg-fuchsia-400 w-1/2 h-[80vh] rounded-xl p-4'>Image 2</div>
      </div>
    </>
  )
}

export default Gallery