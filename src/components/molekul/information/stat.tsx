import React from 'react'

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b-[1px] border-white">
    <div className='px-3 py-20 flex gap-8 justify-center items-center'>
       <h1 className='font-extrabold text-6xl'>11K+</h1>
       <p className='text-slate-400'>Happy Customer with our services</p>
    </div>
    <div className='px-3 py-20 flex gap-8 justify-center items-center'>
       <h1 className='font-extrabold text-6xl'>22K+</h1>
       <p className='text-slate-400'>The best property we provide</p>
    </div>
    <div className='px-3 py-20 flex gap-8 justify-center items-center'>
       <h1 className='font-extrabold text-6xl'>11K+</h1>
       <p className='text-slate-400'>Awesome companies believe in us</p>
    </div>
  </div>
  )
}
