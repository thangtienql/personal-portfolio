"use client";

import PageLoader from "@/components/layout/PageLoader";
import NavMenu from "@/components/layout/NavMenu";
import LeftSidebar from "@/components/layout/LeftSidebar";
import ThreeBackground from "@/components/three/ParticleSphere";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ThreeBackground />
      <NavMenu />
      <LeftSidebar />

      {/* Main content — shifted right to balance sidebar on desktop */}
      <main className="drake-main max-w-full overflow-x-hidden lg:ml-[420px]">
        <div className="relative z-10">
          <Hero />
          <About />
          <Resume />
          <Services />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Clients />
          <Pricing />
          <Contact />
        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-[#333] py-8 text-center">
          <p className="text-sm text-[#555]">
            &copy; {new Date().getFullYear()} John Doe. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
