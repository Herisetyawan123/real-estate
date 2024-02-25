import IconLabel from '@/components/atom/our-popular-property/icon-label';
import Image from 'next/legacy/image';
import { CiLocationOn } from "react-icons/ci";
import { BiBed, BiBath, BiCar } from "react-icons/bi";

function CardProperty({ item }: { item: IApartment }) {

   return (
      <div className='bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500'>
         <div className="w-full h-80 overflow-hidden relative">
            <Image src={"https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} layout='fill' alt='property' className='w-full h-full' />
         </div>
         <div className="body mx-5 py-5 border-b">
            <h3 className='text-blue font-bold text-xl'>{item.price}</h3>
            <p>{item.name}</p>
         </div>
         <div className="footer p-5">
            <IconLabel Icon={CiLocationOn} label={item.location} />
            <div className="flex w-full justify-between mt-5">
               <IconLabel Icon={BiBed} label={`${item.bed} Bed`} />
               <IconLabel Icon={BiBath} label={`${item.bath} Bath`} />
               <IconLabel Icon={BiCar} label={`${item.parking} Parking`} />
            </div>
         </div>
      </div>
   )
}

export default CardProperty