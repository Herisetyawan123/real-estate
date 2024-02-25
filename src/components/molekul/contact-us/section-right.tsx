import React from 'react'
import Gedung from "@/assets/single-apart.jpg";
import Image from 'next/legacy/image';

export default function SectionRight() {
  return (
    <div className='flex-1 relative flex justify-end'>
      <div className='w-[80%] h-[30rem] relative'>

        <div className='absolute overflow-hidden w-full h-full  rounded-2xl shadow-xl'>
          <Image src={Gedung} alt='gedung' objectFit='cover' className='w-full h-full overflow-hidden' />
        </div>
        <div className='absolute bg-white px-10 py-5 rounded-xl max-w-48 top-1/2 -translate-y-1/2 -left-1/2 translate-x-1/2 shadow-xl'>
          <h3 className='font-bold text-lg text-blue'>22k+</h3>
          <p className='text-xs mt-3'>Propertt Ready to buy and sell</p>
        </div>
      </div>
    </div>
  )
}
