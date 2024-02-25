import CardProperty from '@/components/molekul/our-popular-property/card-property'
import TitleHead from '@/components/molekul/our-popular-property/title-head'
import WrapProperty from '@/components/molekul/our-popular-property/wrap-property'
import React from 'react'

function OurPopularProperty() {
  return (
    <section  className='px-8 md:px-16 py-10 bg-white-s'>
      <TitleHead />
      <WrapProperty>
        <CardProperty />
        <CardProperty />
        <CardProperty />
      </WrapProperty>
    </section>
  )
}

export default OurPopularProperty