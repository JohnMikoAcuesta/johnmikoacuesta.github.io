import Hero from "@/components/Hero";
import Herodetails from "@/components/Herodetails";
import Experience from "@/components/Experience";
import Stacks from "@/components/Stacks";
import React from "react";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Floating from "@/components/Floating";
import Faq from "@/components/Faq";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Floating />
      <Hero />
      <Herodetails />
      <Stacks />
      <Experience />
      <Testimonials />
      <Projects />
      <Faq />
      <Script src="main.js" />
    </>
  );
}
