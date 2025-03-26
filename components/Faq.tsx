import React from "react";

import * as AccordionPrimitive from "react-accordion";
import { PlusIcon } from "lucide-react";
import { FAQ_ITEMS } from "@/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section id="faq" className="relative max-w-7xl mx-auto mb-3 mt-32">
      <div className="p-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text">
        FAQ
      </div>
      <div className="px-4">
        <Accordion type="single" collapsible className="w-full text-white">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className=" cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-2 text-left text-xl font-semibold transition-all outline-none focus-visible:ring-[3px] [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                  <span className="flex flex-col space-y-1">
                    <span>{item.title}</span>
                    {item.sub && (
                      <span className="text-sm font-normal ">{item.sub}</span>
                    )}
                  </span>
                  <PlusIcon
                    size={16}
                    className="pointer-events-none shrink-0 opacity-50 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 opacity-80">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
