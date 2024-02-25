import React from 'react'

function FormSubcribe() {
    return (
        <form className="border max-w-fit px-3 py-2 rounded-lg flex">
            <input type="text" className='bg-transparent focus:outline-none' placeholder={'Enter Your Email'} />
            <button className='block bg-blue px-4 py-2 rounded-lg'>
                Subscribe
            </button>
        </form>
    )
}

export default FormSubcribe