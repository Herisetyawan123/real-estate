import React from 'react'

function TitleMenu({ children }: ChildrenType) {
  return (
    <h3 className='font-semibold'>
        { children }
    </h3>
  )
}

export default TitleMenu