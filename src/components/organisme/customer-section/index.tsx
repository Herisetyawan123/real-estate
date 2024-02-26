import CardCustomer from '@/components/molekul/customer-section/card-customer'
import KutipSvg from '@/components/style/kutip'
import Image from 'next/legacy/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function CustomerSection() {
    return (
        <section className='pt-10 pb-36 bg-white w-full'>
            <h1 className='font-bold text-5xl max-w-[30rem] mx-auto text-center'>
                Kind Words From Our Happy Customers
            </h1>
            <Marquee className='mt-10 grid grid-cols-4 gap-2 py-10'>
                {
                    [0,1,2,3,4,5,6,7].map((_, index) => <CardCustomer key={index} />)
                }
            </Marquee>
        </section>
    )
}

export default CustomerSection