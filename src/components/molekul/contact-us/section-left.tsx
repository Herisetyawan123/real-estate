import Link from 'next/link'
import React from 'react'

export default function SectionLeft() {
  return (
    <div className='flex-1 p-10 flex flex-col justify-center'>
        <h2 className='text-2xl font-bold'>Navigating Your Real <br /> Estate Journey</h2>
        <p className='mt-2 text-xs text-slate-700 font-light'>Look for An Agency With A Proven Track Record Of Success In Buying, Selling, Or Renting Properties. You Want An Agency That Has Been In The industry For A While And Has Experience Dealing With Various Types Of Properties.</p>

        <Link href={'/'} className='px-8 py-3 shadow-md bg-primary text-white rounded-xl mt-5 max-w-fit block'>
          Contact Us
        </Link>
    </div>
  )
}
