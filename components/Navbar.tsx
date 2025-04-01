import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="top-0 z-10 p-5 text-md">
      <div className="flex flex-wrap items-center justify-between py-3 mx-auto mt-0 max-w-7xl">
        <Link href="/">
          <Image src="/Logo-white.svg" alt="logo" width={128} height={44} />
        </Link>
        <ul className="hidden h-full gap-8 lg:flex text-gray-300 items-center">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="bg-transparent hover:text-white" scroll={true}>
              {link.label}
            </Link>
          ))}
          <div className="lg:flex lg:content-center hidden">
            <Link href="https://api.whatsapp.com/send/?phone=971568914895">
              <Button
                type="button"
                title="Get in touch"
              />
            </Link>
          </div>
          </ul>
          
      </div>
    </nav>
  );
};

export default Navbar;
