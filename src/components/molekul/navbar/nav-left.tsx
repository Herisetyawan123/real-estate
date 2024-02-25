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
        <NavLink href='/'>
          Rent
        </NavLink>
        <NavLink href='/'>
          Sell
        </NavLink>
        <NavLink href='/'>
          About
        </NavLink>
      </div>
    </div>
  )
}
