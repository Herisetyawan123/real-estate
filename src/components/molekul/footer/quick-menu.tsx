import NavMenu from '@/components/atom/footer/nav-menu'
import TitleMenu from '@/components/atom/footer/title-menu'
import WrapMenu from '@/components/atom/footer/wrap-menu'
import React from 'react'

function QuickMenu() {
    return (
        <div>
            <TitleMenu>
                Quick Menu
            </TitleMenu>
            <WrapMenu>
                <NavMenu to='/'>
                    Home
                </NavMenu>
                <NavMenu to='/apartement'>
                    Rent
                </NavMenu>
                <NavMenu to='/apartement'>
                    Sell
                </NavMenu>
                <NavMenu to='/#about'>
                    About
                </NavMenu>
            </WrapMenu>
        </div>
    )
}

export default QuickMenu