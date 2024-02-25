import Hero from '@/components/organisme/hero/hero'
import ContactUs from '@/components/organisme/contact-us/contact-us'
import Information from '@/components/organisme/information/information'
import OurPopularProperty from '@/components/organisme/our-popular-property/our-popular-property'
import Footer from '@/components/organisme/footer/footer'


export default async function Home() {

  const data = await getApartement();

  return (
    <>
      <main className="">
        <Hero />
        <ContactUs />
        <Information />
        <OurPopularProperty apartement={data} type='home' />
        <Footer />
      </main>

    </>
  )
}

export async function getApartement() {
  // Fetch data from external API
  const res = await fetch(`https://real-estate-iota-tan.vercel.app/api/apartement`)
  const data = await res.json()
  return  data;
}
