import React from 'react'

type PropsType = {
    name: string;
    value: string
}

export default function LabelSearch({ name, value }: PropsType) {
    return (
        <div className="flex flex-col items-start gap-2">
            <h5>
                {name}
            </h5>
            <input type="text" defaultValue={value} className='block text-sm text-gray-400 py-1 focus:outline-none' />
        </div>
    )
}
