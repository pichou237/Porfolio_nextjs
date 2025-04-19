'use client';

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Import des images
import airproject from '../../public/images/Group 40.png';
import ecomproj from '../../public/images/Group 41.png';
import ajeproject from '../../public/images/Group 42.png';
import python from '../../public/images/image.png';
import laravel from '../../public/images/03-tutorial-laravel-API-REST-restful-app-web-Laravel-5.5-1500x630.png';
import react from '../../public/images/Materially-Reactjs-Admin-Template.webp';

interface Project {
  id: number;
  title: string;
  category: string;
  subCategory?: string;
  image: StaticImageData;
}

interface ProjectCardProps {
  title: string;
  category: string;
  subCategory?: string;
  image: StaticImageData;
}

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "Framework",
  "Language Programming",
] as const;

const subCategories: Record<string, readonly string[]> = {
  "Framework": ["ReactJS", "NextJS", "TailwindCSS", "Laravel", "VueJS"] as const,
  "Language Programming": ["JavaScript", "Python", "Java", "Kotlin", "TypeScript"] as const,
};

const projects: readonly Project[] = [
  { id: 1, title: "AirCalling Landing Page Design", category: "Web Design", image: airproject },
  { id: 2, title: "Business Landing Page Design", category: "Web Design", image: ajeproject },
  { id: 3, title: "Ecom Web Page Design", category: "Web Design", image: ecomproj },
  { id: 4, title: "ReactJS Dashboard", category: "Framework", subCategory: "ReactJS", image: react },
  { id: 5, title: "Laravel Admin Panel", category: "Framework", subCategory: "Laravel", image: laravel },
  { id: 6, title: "Python Data Analysis", category: "Language Programming", subCategory: "Python", image: python },
];

const ProjectCard = ({ title, category, subCategory, image }: ProjectCardProps) => (
  <div className="w-full bg-white p-3 rounded-xl shadow-md transition-all hover:scale-[1.02] hover:shadow-lg max-w-xs mx-auto">
    <div className="relative h-48 rounded-lg overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <p className="text-orange-500 text-sm mt-3 font-medium">
      {subCategory || category}
    </p>
    <h3 className="text-md font-semibold mt-1 line-clamp-2">{title}</h3>
  </div>
);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedSubCategory) return project.subCategory === selectedSubCategory;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 text-center mt-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-gray-600 mt-2 mb-8 max-w-xl mx-auto">
          Explore my work across different categories including web design, frameworks, and programming languages.
        </p>
        
        <div className="flex justify-center flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { 
                setSelectedCategory(category); 
                setSelectedSubCategory(null); 
              }}
              className={`px-4 py-2 rounded-lg border transition-all font-medium text-sm ${
                selectedCategory === category 
                  ? "bg-orange-500 text-white border-orange-500 shadow-md" 
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedCategory in subCategories && (
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {subCategories[selectedCategory].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(selectedSubCategory === sub ? null : sub)}
                className={`px-3 py-1.5 rounded-lg border transition-all text-sm ${
                  selectedSubCategory === sub 
                    ? "bg-orange-400 text-white border-orange-400 shadow-md" 
                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title}
              category={project.category}
              subCategory={project.subCategory}
              image={project.image}
            />
          ))
        ) : (
          <div className="col-span-full py-12 text-gray-500">
            No projects found in this category
          </div>
        )}
      </div>
    </section>
  );
}