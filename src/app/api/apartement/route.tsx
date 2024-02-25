import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ 
    status: true,
    message: "success to fetching data",
    data: [
      {
        name: 'The Bismillah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'Noakhali, Bangladesh',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Alhamdullilah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,000,00',
        location: 'Jakarta, Indonesia',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Masyallah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'jeddah, Arab',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Subhanallah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$70,000,00',
        location: 'Kuala Lumpur, Malaysia',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Aamiin Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'New Delhi, India',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Insya Allah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'Sydney, Australia',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Bismillah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'Noakhali, Bangladesh',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Insya Allah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'Sydney, Australia',
        bed: 4,
        bath: 2,
        parking: 1
      },
      {
        name: 'The Masyallah Apartment',
        image: 'https://images.unsplash.com/photo-1589097202929-7c1e527d5b84?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '$50,200,00',
        location: 'jeddah, Arab',
        bed: 4,
        bath: 2,
        parking: 1
      },
    ]
   });
}