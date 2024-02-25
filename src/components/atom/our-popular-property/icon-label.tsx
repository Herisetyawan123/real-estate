import React from 'react'
import { IconType } from 'react-icons'

function IconLabel({ Icon, label }: { Icon: IconType,label: string }) {
    return (
        <div className="flex items-center gap-1 text-slate-700">
            <Icon className='font-bold' />
            <p className='text-sm'>{label}</p>
        </div>
    )
}

export default IconLabel