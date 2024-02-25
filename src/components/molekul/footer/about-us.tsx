import NavMenu from '@/components/atom/footer/nav-menu'
import TitleMenu from '@/components/atom/footer/title-menu'
import WrapMenu from '@/components/atom/footer/wrap-menu'
import React from 'react'

function AboutUs() {
    return (
        <div>
            <TitleMenu>
                About Us
            </TitleMenu>
            <WrapMenu>
                <NavMenu to='/'>
                    payment plans
                </NavMenu>
                <NavMenu to='/'>
                    Make saving More
                </NavMenu>
                <NavMenu to='/'>
                    Tax Calculator
                </NavMenu>
                <NavMenu to='/'>
                    Talk to Us
                </NavMenu>
            </WrapMenu>
        </div>
    )
}

export default AboutUs