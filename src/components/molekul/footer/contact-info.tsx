import NavMenu from '@/components/atom/footer/nav-menu'
import TitleMenu from '@/components/atom/footer/title-menu'
import WrapMenu from '@/components/atom/footer/wrap-menu'
import React from 'react'

function ContactInfo() {
    return (
        <div>
            <TitleMenu>
                Contact Info
            </TitleMenu>
            <WrapMenu>
                <NavMenu to='https://maps.google.com/'>
                   123 Jln Jawa, Sumbersari, Jember, Jawa Timur.
                </NavMenu>
                <NavMenu to='https://wa.me/6283853797950'>
                    +62 83 853 797 950
                </NavMenu>
                <NavMenu to='mailto:herisetyawan233@gmail.com'>
                    herisetyawan233@gmail.com
                </NavMenu>
            </WrapMenu>
        </div>
    )
}

export default ContactInfo