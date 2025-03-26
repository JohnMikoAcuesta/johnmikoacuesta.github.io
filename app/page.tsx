import Hero from "@/components/Hero";
import Herodetails from "@/components/Herodetails";
import Experience from "@/components/Experience";
import Stacks from "@/components/Stacks";
import React from "react";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Floating from "@/components/Floating";
import Faq from "@/components/Faq";

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
    </>
  );
}
