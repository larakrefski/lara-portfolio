import Image from "next/image";

export function Skills() {
  return (
    <section id="skills" className="relative py-16 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/hero-bg-image.jpg"
          alt="Skills background"
          fill
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-3xl md:text-[2.5rem] font-display font-semibold text-white uppercase tracking-wider">
            Skills
            <span className="absolute -bottom-2 left-0 w-full h-[10px] bg-[#90C9E1]" />
          </h2>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden rounded-xl border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#081f73]">
            <div className="py-6 px-8 border-b md:border-b-0 md:border-r border-white/10 text-center">
              <h3 className="text-white font-bold uppercase tracking-wider text-xl">Webflow & CMS</h3>
            </div>
            <div className="py-6 px-8 border-b md:border-b-0 md:border-r border-white/10 text-center">
              <h3 className="text-white font-bold uppercase tracking-wider text-xl">Front-End Engineering</h3>
            </div>
            <div className="py-6 px-8 text-center">
              <h3 className="text-white font-bold uppercase tracking-wider text-xl">BackEnd & Marketing Ops</h3>
            </div>
          </div>

          {/* Content Row - Using backdrop-blur for a "Glass" table effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white/5 backdrop-blur-md">
            
            {/* Column 1 */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-wrap gap-3 content-start">
              {['Webflow Enterprise', 'CMS Governance', 'Optimize', 'Analyze', 'Client-First', 'Finsweet Attributes', 'Sanity CMS', 'Headless Architecture'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/10 text-white rounded-md text-sm md:text-base font-medium border border-white/10 whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </div>

            {/* Column 2 */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-wrap gap-3 content-start">
              {['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'TailwindCSS', 'Material UI', 'HTML5/CSS3', 'Responsive Design'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-blue-500/20 text-blue-50 rounded-md text-sm md:text-base font-medium border border-blue-400/30 whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </div>

            {/* Column 3 */}
            <div className="p-10 flex flex-wrap gap-3 content-start">
              {['ASP.NET', 'C#', 'SQL Server', 'T-SQL', 'GraphQL', 'Salesforce', 'Marketo', 'GA4', 'Technical SEO'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-400/10 text-slate-200 rounded-md text-sm md:text-base font-medium border border-white/10 whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}