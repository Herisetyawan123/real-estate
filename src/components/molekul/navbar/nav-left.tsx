import NavLink from '@/components/atom/navbar/nav-link'
import NavLogo from '@/components/atom/navbar/nav-logo'
import React from 'react'

export default function NavLeft() {
  return (
    <div className='flex gap-10 items-center'>
      <NavLogo />
      <div className='hidden md:flex gap-14'>
        <NavLink href='/'>
          Home
        </NavLink>
        <NavLink href='/apartement'>
          Rent
        </NavLink>
        <NavLink href='/apartement'>
          Sell
        </NavLink>
        <NavLink href='#about'>
          About
        </NavLink>
      </div>
    </div>
  )
}
