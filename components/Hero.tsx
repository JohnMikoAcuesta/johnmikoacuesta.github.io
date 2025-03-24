import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="relative max-w-7xl flex flex-col p-3 text-white mx-auto mb-3">
        <Image className="rounded-full mx-auto" src="/profile.png" alt="profile" width={130} height={130}/>
        <div className="absolute bg-white text-black rounded-lg bg-auto w-fit top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-6/7">
           <ul className='lg:flex items-center p-2 gap-1'>
            <Image className="ms-2" src="/badge.svg" alt="badge" width={20} height={20}/>
            <h1 className="text-center me-23xs">Verified User</h1>
           </ul>
        </div>
    </section>
  )
}

export default Hero