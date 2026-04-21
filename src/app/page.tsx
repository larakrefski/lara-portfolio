import { Navbar, Hero, About, ProjectGallery, Footer } from '@/components';
import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/types/project';
import { Skills } from '@/components/Skills';

export default async function Home() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

  return (
<>
      <Navbar />
      <Hero />
      <About />
      <ProjectGallery projects={projects} />
      <Skills />


      <section id="contact" className="py-32 px-10 bg-white text-white">
        {/* Your Contact Form */}
      </section>

      <Footer />
    </>
  );
}
