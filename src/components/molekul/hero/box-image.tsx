import React from 'react'
import BoxSearch from './box-search'
import BgHero from "@/assets/hero.jpg";

const style: React.CSSProperties = {
  backgroundImage: `url(${BgHero.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPositionY: -250,
}

export default function BoxImage({ children, className }: ChildrenType & { className?: string }) {
  return (
    <div className={"bg-p-grey w-full h-[30rem] md:h-[38rem] rounded-3xl relative "+className} style={style}>
        { children }
        <BoxSearch />
    </div>
  )
}
