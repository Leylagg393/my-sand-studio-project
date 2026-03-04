import React from 'react'
import { projects } from '@/Components/data' 

const Portfolio = () => {
  return (
    <div className="pt-24 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => {
          return (
            <div key={project.id} className="projects group">
               <div className="bg-[#E5D3B3] aspect-video mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <h1 className="text-[#6B5E4C] tracking-widest uppercase text-sm">
                 {project.title}
               </h1>
            </div>
          ); 
        })}
      </div>
    </div>
  )
}

export default Portfolio