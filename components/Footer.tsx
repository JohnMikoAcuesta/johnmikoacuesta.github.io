import { FOOTER_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bottom-0 z-10 lg-w-full p-5 text-center">
      <div className="lg:flex lg:flex-wrap lg:justify-between py-3 mx-auto mt-0 max-w-7xl">
        <p className="text-white text-sm">
          Copyright © 2025 Johnui. All Rights Reserved.
        </p>
        <ul className="h-full gap-2 lg:flex text-gray-300 items-center">
          {FOOTER_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className=" hover:text-white mx-3 text-md">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer