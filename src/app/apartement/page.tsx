import OurPopularProperty from '@/components/organisme/our-popular-property/our-popular-property';
import React from 'react'

export default async function Apartment() {
  const data = await getApartement();
  return (
    <>
      <OurPopularProperty apartement={data} type="page" />
    </>
  )
}

export async function getApartement() {
  // Fetch data from external API
  const res = await fetch(`https://real-estate-iota-tan.vercel.app/api/apartement`)
  const data = await res.json()
  return  data;
}
