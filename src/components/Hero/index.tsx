import Image from "next/image";

export function Hero() {
  return (
    
    /* THE HEIGHT LOGIC:
        - Mobile/iPad: Use 'h-auto' so the section only grows as tall as the content + spacers.
        - Desktop/iPad Pro: Keep the fixed 'lg:h-[750px]' for that premium look.
    */
    <section className="relative w-full h-auto lg:h-[750px] flex flex-col bg-[#141e22] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/hero-bg-image.jpg"
          alt="Hero background"
          fill
          priority
          fetchPriority="high" 
          className="object-cover object-center"
          quality={80} 
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 flex flex-col w-full lg:h-full lg:justify-center">
        <div className="h-[104px] w-full shrink-0" /> {/* Navbar Height */}
        <div className="h-10 md:h-16 lg:h-20 w-full shrink-0" /> {/* Top Spacer */}


          <div className="max-w-5xl w-full text-white text-center px-6 md:px-10 mx-auto">

            <h2 className="text-xl md:text-2xl [font-family:var(--font-orkney)] uppercase tracking-widest mb-4 opacity-80 font-bold">
              Principal Web Engineer & Engineering Manager
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-[#90C9E1]">
              Building Scalable Ecosystems at the Intersection of Code and Operations.
            </h1>
            <p className="font-sans text-lg md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              With 10+ years of front-end expertise, I architect high-velocity ecosystems that decouple engineering from marketing. This empowers teams to build, test, and scale at the speed of business, removing the technical bottleneck.
            </p>
      
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#projects" className="inline-flex items-center justify-center leading-none bg-[#90C9E1] hover:opacity-80 transition-opacity text-[#141e22] text-xl md:text-2xl uppercase px-6 py-2 rounded-xl font-bold transition-all">
                View My Work
              </a>
              <a href="/lara-krefski-resume.pdf" target="_blank" className="inline-flex items-center justify-center leading-none hover:opacity-80 transition-opacity border-3 border-[#90C9E1] text-white text-xl md:text-2xl uppercase px-6 py-2 rounded-xl font-bold transition-all">
                Download Resume
              </a>
            </div>
          
        </div>
        <div className="h-16 md:h-16 lg:h-20 w-full shrink-0" /> {/* Bottom Spacer */}
      </div>
    </section>
  );
}