import BoxImage from '@/components/molekul/hero/box-image'
import React from 'react'

export default function Hero() {
  return (
    <section className='px-16 pt-10 pb-20 bg-white-s'>
        {/* image */}
        <BoxImage className='flex flex-col items-center py-10 px-3 md:px-52 lg:px-72'>
            <h1 className='text-center text-xl md:text-6xl'>Investing In Your Future One Home At A Time</h1>
            <p className='mt-5 text-xs text-center max-w-[32rem] text-gray-700'>We'll help you find the key to your dream home. Experience the joy of homeownership. Let us make your home buying journey simple</p>
            <button className='px-5 py-3 border border-black rounded-2xl mt-5 hover:bg-black hover:text-white transition-all duration-700'>
              Get Started
            </button>
        </BoxImage>
    </section>
  )
}
