import Link from "next/link";
import React from "react";

function Experience() {
  return (
    <section id="experiences" className="relative max-w-7xl mx-auto mb-3 mt-32">
        <div className="p-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text">
          Experience
        </div>
        <Link href="https://binghatti.com">
          <div className="text-white mt-5 p-4 text-xl border-light">
            <div className="grid grid-cols-2">
              <h1 className="text-start">Graphic Designer <br />
                <span><small className="text-slate-300">Full-time</small></span>
              </h1>
              <h1 className="text-end hover:text-blue-300">Binghatti <br />
                <span><small className="text-slate-300">May 2025 - Present</small></span>
              </h1>
            </div>
          </div>
        </Link>
        <Link href="https://famproperties.com">
          <div className="text-white mt-5 p-4 text-xl border-light">
            <div className="grid grid-cols-2">
              <h1 className="text-start">Graphic Designer <br />
                <span><small className="text-slate-300">Full-time</small></span>
              </h1>
              <h1 className="text-end hover:text-blue-300">fäm Properties <br />
                <span><small className="text-slate-300">Apr 2024 - Apr 2025</small></span>
              </h1>
            </div>
          </div>
        </Link>
        <Link href="https://sugbodoc.com">
          <div className="text-white mt-5 p-4 text-xl border-light">
            <div className="grid grid-cols-2">
              <h1 className="text-start">Website Developer <br />
                <span><small className="text-slate-300">Full-time</small></span>
              </h1>
              <h1 className="text-end hover:text-blue-300">SugboDoc Technologies Inc. <br />
                <span><small className="text-slate-300">Feb 2023 - Oct 2023</small></span>
              </h1>
            </div>
          </div>
        </Link>
        <div className="text-white mt-5 p-4 text-xl border-light">
          <div className="grid grid-cols-2">
            <h1 className="text-start">Graphic/Web Designer <br />
              <span><small className="text-slate-300">Self-employed</small></span>
            </h1>
            <h1 className="text-end">Freelancing Platform <br />
              <span><small className="text-slate-300">Jun 2022 - Present</small></span>
            </h1>
          </div>
        </div>
    </section>
  );
}

export default Experience;
