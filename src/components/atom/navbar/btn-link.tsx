import Link from 'next/link'
import React from 'react'

export default function BtnLink({ href, children }: { href: string } & ChildrenType) {
  return (
    <Link href={href} className='block bg-primary text-white px-5 py-2 rounded-lg hover:bg-slate-700 duration-300 transition-all'>
        { children }
    </Link>
  )
}
