import React from 'react'
import Button from "./Button";
import Link from 'next/link';

function Herodetails() {
  return (
    <section className="relative max-w-7xl flex flex-col p-3 mx-auto mb-3">
        <div className="mx-auto text-center">
            <h1 className="text-5xl/[<1>] break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text font-medium">Designing your <br /> Digital Future</h1>
            <br />
            <p className="break-words w-sm text-white">Highly skilled and motivated computer literate where I can lend my knowledge to solve modern world problems.</p>
            <div className="flex content-center justify-center gap-3 mx-auto mt-5 text-lg text-white">
              <Link href="https://api.whatsapp.com/send/?phone=971568914895">
                <Button
                  type="button"
                  title="Hire me"
                />
              </Link>
              <Link href="./JohnMikoAcuesta-CV.pdf" download="JohnMikoAcuesta-CV">
                <Button
                  type="button"
                  title="Download CV"
                />
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Herodetails