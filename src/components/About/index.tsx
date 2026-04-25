import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-3xl md:text-[2.5rem] font-display font-semibold text-[#141e22] uppercase tracking-wider">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-[10px] bg-[#90C9E1]" />
          </h2>
        </div>

        <div className="flex flex-col tablet:grid tablet:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="tablet:col-span-8 space-y-6 order-1">
            <h3 className="text-2xl md:text-[2.2rem] font-sans font-extrabold text-[#141e22]">
              The Right Tool for the Job
            </h3>
            <p className="text-base text-[#141e22] leading-relaxed">
              In my 10+ years of building for the web, I’ve learned that the &quot;best&quot; technology is the one that actually helps a business grow. I’ve spent years architecting complex, custom applications from the ground up using React and Next.js, so I know exactly what goes into building a high-performance ecosystem at scale.
            </p>
            <p className="text-base text-[#141e22] leading-relaxed">
              Today, I often lean into Webflow because of the incredible speed it offers for high-velocity marketing. I use my engineering background to push Webflow further—like building custom logic in JavaScript and utilizing Tailwind CSS principles to maintain a clean, professional design system—while keeping content management simple for the whole team.
            </p>
            <p className="text-base text-[#141e22] leading-relaxed">
              Whether I’m coding a custom application in Next.js or a high-performance site in Webflow, my goal is the same: building a reliable, scalable foundation that removes technical bottlenecks and lets the business move at full speed.
            </p>

            {/* Container for the two bullet points */}
            <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-12">
              
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-8 h-8 shrink-0">
                  <Image 
                    src="/images/about/blue-checkmark.svg"
                    alt="Blue Checkmark Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[#141e22] text-xl/[1.1]">
                  Webflow Enterprise Developer
                </p>
              </div>

              {/* Bullet Point 2 */}
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-8 h-8 shrink-0">
                  <Image 
                    src="/images/about/blue-checkmark.svg"
                    alt="Blue Checkmark Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[#141e22] text-xl/[1.1]">
                  Principal Front-End Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="tablet:col-span-4 w-full max-w-md tablet:max-w-none mx-auto relative aspect-square overflow-hidden order-2">
            <Image
              src="/images/about/about-square-image.jpg"
              alt="Webflow, React, Next.js, and Tailwind logos"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
