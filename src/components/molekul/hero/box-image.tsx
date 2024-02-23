import React from 'react'
import BoxSearch from './box-search'

export default function BoxImage({ children }: ChildrenType) {
  return (
    <div className="bg-p-grey w-full h-[32rem] rounded-lg relative">
        { children }
        <BoxSearch />
    </div>
  )
}
