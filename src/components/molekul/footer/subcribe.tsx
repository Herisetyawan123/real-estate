import FormSubcribe from '@/components/atom/footer/form-subscribe'
import React from 'react'

function Subcribe({ className }: { className?: string }) {
    return (
        <div className={className}>
            <h1 className="text-2xl text-white">
                RealEstateJ
            </h1>
            <p className='my-5 font-medium text-white text-sm'>
                Investing In Your Future One <br /> Home At A Time
            </p>
            <FormSubcribe />
        </div>
    )
}

export default Subcribe