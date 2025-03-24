import Image from 'next/image'
import React from 'react'
import { LOGO_SOCIALS } from "@/constants";
import Button from './Button';
import Link from 'next/link';

function Projects() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto mb-3 mt-32">
        <div className="p-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text">
          Projects
        </div>
        <div className="text-white mt-5">
            <div className="grid grid-cols-3 gap-2 px-3 justify-items-center">
                <Image src="/projects/story-ad-1.png" alt="Meta Ads 1" width={349} height={620}/>
                <Image src="/projects/story-ad-2.png" alt="Meta Ads 2" width={349} height={620}/>
                <Image src="/projects/story-ad-3.png" alt="Meta Ads 3" width={349} height={620}/>
                {/* {LOGO_SOCIALS.map((item)=> (
                    <Image src={item.url} key={item.key} alt={item.key} width={80} height={80}/>
                ))} */}
            </div>
            <div className="flex content-center justify-center mx-auto mt-5 text-lg text-white">
              <Link href="./JohnMikoAcuesta-CV.pdf" download="JohnMikoAcuesta-CV">
                <Button
                  type="button"
                  title="Download Curriculum Vitae"
                />
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Projects