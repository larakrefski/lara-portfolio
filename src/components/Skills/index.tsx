import Image from "next/image";

export function Skills() {
  const skillGroups = [
    {
      title: "Webflow & CMS",
      skills: ['Webflow Enterprise', 'CMS Governance', 'Optimize', 'Analyze', 'Client-First', 'Finsweet Attributes', 'Sanity CMS', 'Headless Architecture'],
      bgHeader: "bg-[#081f73]",
      bgBadge: "bg-white/10 text-white border-white/10"
    },
    {
      title: "Front-End Engineering",
      skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'TailwindCSS', 'Material UI', 'HTML5/CSS3', 'Responsive Design'],
      bgHeader: "bg-[#081f73]", // Keeping headers consistent
      bgBadge: "bg-blue-500/20 text-blue-50 border-blue-400/30"
    },
    {
      title: "BackEnd & Marketing Ops",
      skills: ['ASP.NET', 'C#', 'SQL Server', 'T-SQL', 'GraphQL', 'Salesforce', 'Marketo', 'GA4', 'Technical SEO'],
      bgHeader: "bg-[#081f73]",
      bgBadge: "bg-slate-400/10 text-slate-200 border-white/10"
    }
  ];

  return (
    <section id="skills" className="relative py-16 bg-slate-900 overflow-hidden">
      {/* Background Image */}
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

        {/* DESKTOP VIEW (Visible on tablet and up) */}
          <div className="hidden tablet:block">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[#081f73]">
              {skillGroups.map((group, index) => (
                <div key={group.title} className={`py-6 px-8 text-center ${index !== 2 ? 'border-r border-white/10' : ''}`}>
                  <h3 className="text-white font-bold uppercase tracking-wider text-xl">{group.title}</h3>
                </div>
              ))}
            </div>
            {/* Content Row */}
            <div className="grid grid-cols-3 bg-white/5 backdrop-blur-md">
              {skillGroups.map((group, index) => (
                <div key={index} className={`p-10 flex flex-wrap gap-3 content-start ${index !== 2 ? 'border-r border-white/10' : ''}`}>
                  {group.skills.map(skill => (
                    <span key={skill} className={`px-4 py-2 rounded-md text-sm font-medium border whitespace-nowrap ${group.bgBadge}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE/TABLET STACKED VIEW (Hidden on tablet and up) */}
          <div className="tablet:hidden flex flex-col bg-white/5 backdrop-blur-md">
            {skillGroups.map((group) => (
              <div key={group.title} className="flex flex-col">
                {/* Header attached to column */}
                <div className="py-6 px-8 text-center bg-[#081f73] border-b border-white/10">
                  <h3 className="text-white font-bold uppercase tracking-wider text-xl">{group.title}</h3>
                </div>
                {/* Skills content */}
                <div className="p-8 flex flex-wrap gap-3 content-start">
                  {group.skills.map(skill => (
                    <span key={skill} className={`px-4 py-2 rounded-md text-sm font-medium border whitespace-nowrap ${group.bgBadge}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}