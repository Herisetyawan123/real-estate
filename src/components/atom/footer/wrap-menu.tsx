import React from 'react'

function WrapMenu({ children }: ChildrenType) {
  return (
    <ul className='list-none mt-5 space-y-2'>
        {children}
    </ul>
  )
}

export default WrapMenu