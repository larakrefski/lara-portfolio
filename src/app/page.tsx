import { Navbar, Hero, About, ProjectGallery, Footer } from '@/components';
import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/types/project';
import { Skills } from '@/components/Skills';
import { ContactMe } from '@/components/ContactMe';

export default async function Home() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectGallery projects={projects} />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}
