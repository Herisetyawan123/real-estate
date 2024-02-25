import ContactUs from '@/components/organisme/contact-us/contact-us'
import Information from '@/components/organisme/information/information'
import OurPopularProperty from '@/components/organisme/our-popular-property/our-popular-property'
import Hero from '@/components/organisme/hero/hero'
import Navbar from '@/components/organisme/navbar'


export default function Home() {

  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <ContactUs />
        <Information />
        <OurPopularProperty />
      </main>

    </>
  )
}
