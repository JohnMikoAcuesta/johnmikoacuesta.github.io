import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Floating() {
  return (
    <Link href="https://api.whatsapp.com/send/?phone=971568914895" className="float">
        <Image className="my-float" src="/socials/whatsapp.svg" alt="whatsapp" width={32} height={32}/>
    </Link>
  )
}

export default Floating