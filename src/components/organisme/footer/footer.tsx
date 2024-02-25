import AboutUs from '@/components/molekul/footer/about-us'
import ContactInfo from '@/components/molekul/footer/contact-info'
import QuickMenu from '@/components/molekul/footer/quick-menu'
import Subcribe from '@/components/molekul/footer/subcribe'
import React from 'react'

function Footer() {
    return (
        <footer className='px-8 md:px-16 pt-10 bg-primary text-white'>
            <div className="grid grid-cols-5 border-b border-white pb-10">
                <Subcribe className='col-span-2' />
                <QuickMenu />
                <AboutUs />
                <ContactInfo />
            </div>
            <div className="py-5 text-sm text-slate-300 text-center">
@ 2023 RealEstateJ All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer