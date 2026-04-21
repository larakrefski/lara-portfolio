"use client";
import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { urlFor } from '@/sanity/lib/image';


import { PortableText, PortableTextComponents } from '@portabletext/react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
console.log('Project: ', project);
  const ptComponents: PortableTextComponents = {
    block: {
      // Customizing the standard paragraph
      normal: ({children}) => (
        <p className="text-[.9rem]/[1.5] font-normal leading-relaxed mb-4 text-[#141e22]">
          {children}
        </p>
      ),
    },
    marks: {
      strong: ({children}) => (
        <span className="font-semibold text-[.9rem] text-[#141e22]">
          {children}
        </span>
      ),
    },
    list: {
      // This styles bulleted lists
      bullet: ({ children }) => (
        <ul className="list-disc ml-7 space-y-2 mb-4 text-[.9rem] text-[#141e22]">{children}</ul>
      ),
    },    
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">

      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-7xl h-full max-h-[90vh] flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-30 p-2 bg-slate-100/80 backdrop-blur-sm rounded-full hover:bg-slate-200 border border-slate-200 shadow-sm transition-all">
           <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left Column: Image & Callout */}
        <div className="md:w-3/5 flex flex-col justify-center bg-white p-6 md:p-12 border-b md:border-b-0 md:border-r border-slate-300">
          
          {/* Image Wrapper */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={urlFor(project.mainImage).width(1200).url()}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {project.imageCallout && (
            <div className="mt-8">
              <div className="flex items-center justify-center">
                <div className="prose prose-slate text-center">
                  <PortableText value={project.imageCallout} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Details */}
        <div className="md:w-2/5 bg-white overflow-y-auto p-8 md:p-12 custom-scrollbar">
          <div className="space-y-8">
            <h2 className="text-[1.65rem]/[1.2] font-bold text-[#141e22] uppercase">{project.title}
            </h2>
            <h5 className="text-[#141e22] text-lg mt-1 mb-2"><strong>Role:</strong> {project.role}</h5>
          </div>

          {project.recognition && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-1 mb-3 text-yellow-800 text-sm italic font-medium">
              <div className="prose prose-slate">
                🏆 <PortableText value={project.recognition} components={ptComponents} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-2 text-slate-700">
            <div><h5 className="font-bold text-lg text-[#141e22]">The Challenge:</h5> 
              <div className="prose prose-slate">
                <PortableText value={project.challenge} components={ptComponents} />
              </div>
            </div>
            <div><h5 className="font-bold text-lg text-[#141e22]">The Solution:</h5> 
              <div className="prose prose-slate">
                <PortableText value={project.solution} components={ptComponents} />
              </div>
            </div>
            <div><h5 className="font-bold text-lg text-[#141e22]">The Impact:</h5> 
              <div className="prose prose-slate">
                <PortableText value={project.impact} components={ptComponents} />
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg text-[#141e22] mt-2">Tech Stack:</h5>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack?.map(tech => (
                <span key={tech} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-bold uppercase border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.links && (
            <div className="flex flex-col gap-4 mt-6">

              {/* Group links by label */}
              {Object.entries(
                project.links.reduce((acc, link) => {
                  const isWebflow = link.url?.includes('webflow.com');
                  const label = isWebflow ? "Webflow Share Link(s): " : "Website: ";
                  
                  if (!acc[label]) acc[label] = [];
                  acc[label].push(link);
                  return acc;
                }, {} as Record<string, typeof project.links>)
              ).map(([label, links], groupIndex) => (
                
                <div key={groupIndex} className="flex flex-wrap items-baseline">
                  <span className="font-bold text-lg text-[#141e22] whitespace-nowrap mr-2">
                    {label}
                  </span>

                  {links.map((link, linkIndex) => (
                    <React.Fragment key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        {link.label || link.url}
                      </a>

                      {linkIndex < links.length - 1 && (
                        <span className="text-[#141e22]">,&nbsp;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}