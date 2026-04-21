"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { ProjectModal } from '../ProjectModal'; 
import { urlFor } from '@/sanity/lib/image';

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-slate-200" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-3xl md:text-[2.5rem] font-display font-semibold text-[#141e22] uppercase tracking-wider">
            Project Gallery
            <span className="absolute -bottom-2 left-0 w-full h-[10px] bg-[#90C9E1]" />
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project._id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[681/600] cursor-pointer overflow-hidden bg-white p-3 shadow-lg border border-slate-100 rounded-md"
            >
              {/* Project Image */}
              <Image
                // urlFor creates a optimized, resized URL
                src={urlFor(project.thumbnailImage).width(681).height(600).fit('crop').url()} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
              />

              {/* Royal Blue Overlay */}
              <div className="absolute inset-0 bg-[#081f73]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {project.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Rendered only when a project is selected */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}