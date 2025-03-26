import { FAQ_ITEMS } from "@/constants";
import React from "react";

function Faq() {
  return (
    <section id="testimonials" className="relative max-w-7xl mx-auto mt-12 mb-32 text-white">
        <div className="p-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text">
            FAQ
        </div>
        {FAQ_ITEMS.map((item)=> (
            <div className="border-light" key={item.key}>
                <button className="accordion text-xl text-white">{item.title}</button>
                <div className="panel text-sm opacity-80 text-white">
                    <p className="mb-4">{item.content}</p>
                </div>
            </div>
        ))}
    </section>
  );
}

export default Faq;
