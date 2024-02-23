import BtnSearch from '@/components/atom/hero/btn-search'
import React from 'react'

export default function BoxSearch() {
  return (
    <div className='absolute w-[90%] bg-white flex items-center justify-evenly rounded-2xl left-[50%] -translate-x-[50%] -bottom-[10%] shadow-lg py-10 text-center'>
        <div>
            Location
        </div>
        <div>
            Property
        </div>
        <div>
            Budget
        </div>
        <div>
            <BtnSearch />
        </div>
    </div>
  )
}
