import Link from 'next/link'
import React from 'react'

function NavMenu({ to, children }: { to: string } & ChildrenType) {
    return (
        <li className='text-slate-300'>
            <Link href={to}>
                { children }
            </Link>
        </li>
    )
}

export default NavMenu