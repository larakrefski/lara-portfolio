import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[70dvh] lg:h-[80dvh] flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/hero-bg-image.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      <div className="relative z-20 flex flex-col h-full">
        <div className="h-[104px] w-full shrink-0" />

        <div className="flex-grow flex items-center justify-center px-6">
          <div className="max-w-6xl w-full text-white text-center py-12 lg:py-16">
            <h2 className="text-2xl [font-family:var(--font-orkney)] uppercase tracking-widest mb-4 opacity-80 font-bold">
              Principal Web Engineer & Engineering Manager
            </h2>
            <h1 className="text-4xl font-display font-bold md:text-6xl mb-6 leading-tight text-[#90C9E1]">
              Building Scalable Ecosystems at the Intersection of Code and Operations.
            </h1>
            <p className="font-sans text-xl md:text-2xl mb-10 opacity-90 max-w-5xl mx-auto">
              With 25+ years of front-end expertise, I architect high-velocity ecosystems that decouple engineering from marketing. This empowers teams to build, test, and scale at the speed of business, removing the technical bottleneck.
            </p>
        
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#projects" className="inline-flex items-center justify-center leading-none bg-[#90C9E1] hover:opacity-80 transition-opacity text-[#141e22] text-2xl uppercase px-6 py-2 rounded-xl font-bold transition-all">
                View My Work
              </a>
              <a href="/lara-krefski-resume.pdf" target="_blank" className="inline-flex items-center justify-center leading-none hover:opacity-80 transition-opacity border-3 border-[#90C9E1] text-white text-2xl uppercase px-6 py-2 rounded-xl font-bold transition-all">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}