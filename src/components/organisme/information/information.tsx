import Stats from '@/components/molekul/information/stat'
import React from 'react'

function Information() {
  return (
    <section className='px-8 md:px-16 py-10 bg-primary text-white'>
      <Stats />

      <div className='grid grid-cols-1 sm:grid-cols-2 py-16'>
         <h1 className='text-5xl font-bold'>Where Comfort Meets Convience</h1>
         <p className='mt-2 text-xs text-slate-400 font-light'>Look for An Agency With A Proven Track Record Of Success In Buying, Selling, Or Renting Properties. You Want An Agency That Has Been In The industry For A While And Has Experience Dealing With Various Types Of Properties.</p>
      </div>
    </section>
  )
}

export default Information