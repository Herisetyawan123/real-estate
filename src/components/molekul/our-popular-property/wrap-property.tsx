import React from 'react'

function WrapProperty({ children }: ChildrenType) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10 mt-10'>
      {children}
    </div>
  )
}

export default WrapProperty