import KutipSvg from '@/components/style/kutip'
import Image from 'next/legacy/image'
import React from 'react'

function CardCustomer() {
  return (
    <div className='border shadow p-5 rounded-md max-w-96 mx-2'>
    <KutipSvg />
    <p className='my-3 text-slate-700'>
        From the moment i contacted them, they, we're professional, knowledgeable, and attentive to my needs. They took the time to listen to my preferences and provided me with a wide range of properties that met my criteria
    </p>
    <div className='flex items-center gap-2'>
        <div className='my-2 relative w-14 h-14 rounded-full overflow-hidden'>
            <Image src={'https://i.pravatar.cc/300'} className='w-full h-full' alt='profile' layout='fill' />
        </div>
        <div>
            <h4 className='font-bold text-primary'>Arefin Shuvo</h4>
            <p className='text-sm text-slate-700'>CEO, NoonBrew</p>
        </div>
    </div>
</div>
  )
}

export default CardCustomer