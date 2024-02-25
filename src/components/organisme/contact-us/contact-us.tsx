import SectionLeft from '@/components/molekul/contact-us/section-left'
import SectionRight from '@/components/molekul/contact-us/section-right'
import React from 'react'

export default function ContactUs() {
  return (
    <section className='px-8 md:px-16 pt-10 pb-36 bg-white' id="about">
        <div className="flex flex-col md:flex-row justify-center gap-5 mx-auto max-w-[60rem] my-20">
            <SectionLeft />
            <SectionRight />
        </div>
    </section>
  )
}
