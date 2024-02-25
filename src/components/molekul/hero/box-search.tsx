"use client"
import BtnSearch from '@/components/atom/hero/btn-search'
import LabelSearch from '@/components/atom/hero/label-search'
import React, { FormEvent } from 'react'

export default function BoxSearch() {
    const submit = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={submit} className='hidden absolute w-[90%] bg-white md:flex items-center px-3 justify-evenly rounded-2xl left-[50%] -translate-x-[50%] -bottom-[10%] shadow-lg py-10 text-center flex-wrap gap-2'>
            <LabelSearch name='Location' value='Bangladesh'
            />
            <LabelSearch name='Property Type' value='Duplex'
            />
            <LabelSearch name='Budget' value='12,000'
            />
            <div>
                <BtnSearch />
            </div>
        </form>
    )
}
