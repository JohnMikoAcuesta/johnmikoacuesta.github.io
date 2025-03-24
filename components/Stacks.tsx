import Image from 'next/image'
import React from 'react'
import { LOGO_TOOLS } from "@/constants";
import Link from "next/link";

function Stacks() {
  return (
    <section className="relative max-w-7xl lg:flex p-3 mx-auto mb-3 mt-18 grid grid-cols-3 gap-y-6">
        {LOGO_TOOLS.map((item)=> (
          <Link className="mx-auto" href={item.link} key={item.key}>
              <Image className="transition duration-500 ease-in-out hover:scale-130" src={item.url} key={item.key} alt={item.key} width={80} height={80}/>
          </Link>
        ))}
    </section>
  )
}

export default Stacks