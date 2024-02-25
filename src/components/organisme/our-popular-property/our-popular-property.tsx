import CardProperty from '@/components/molekul/our-popular-property/card-property'
import TitleHead from '@/components/molekul/our-popular-property/title-head'
import WrapProperty from '@/components/molekul/our-popular-property/wrap-property'
import Link from 'next/link'
import React from 'react'

function OurPopularProperty( { apartement } : { apartement: IResponseApartment<IApartment> } ) {

  return (
    <section  className='px-8 md:px-16 py-10 bg-white-s'>
      <TitleHead />
      <WrapProperty>
        {
            apartement.data.filter((_,index) => index <= 5).map((item, index) => <CardProperty key={index} />)
        }
      </WrapProperty>

      <div className="mt-10 w-full ">
        <Link href={'/apartement'} className='bg-primary text-white hover:bg-slate-900 duration-700 font-semibold px-6 py-3 rounded-md mx-auto block max-w-fit'>
            Explore All Property
        </Link>
      </div>
    </section>
  )
}

export default OurPopularProperty