"use client"
import { Link } from '@chakra-ui/next-js'
import React from 'react'

export default function NavLink({ href, children }: { href: string } & ChildrenType) {
    return (
        <Link href={href} className='font-thin text-slate-600 duration-500 transition-all hover:text-slate-900'>{children}</Link>
    )
} 
