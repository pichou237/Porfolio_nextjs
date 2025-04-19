'use client';

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// import des images
import airproject from '../../public/images/Group 40.png'
import ecomproj from '../../public/images/Group 41.png'
import ajeproject from '../../public/images/Group 42.png'
import python from '../../public/images/image.png'
import laravel from '../../public/images/03-tutorial-laravel-API-REST-restful-app-web-Laravel-5.5-1500x630.png'
import react from '../../public/images/Materially-Reactjs-Admin-Template.webp'
 
interface Project {
  id: number;
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
];

const subCategories: Record<string, string[]> = {
  "Framework": ["ReactJS", "NextJS", "TailwindCSS", "Laravel", "VueJS"],
  "Language Programming": ["JavaScript", "Python", "Java", "Kotlin", "TypeScript"],
};

const projects: Project[] = [
  { id: 1, title: "AirCalling Landing Page Design", category: "Web Design", image: airproject },
  { id: 2, title: "Business Landing Page Design", category: "Web Design", image: ajeproject },
  { id: 3, title: "Ecom Web Page Design", category: "Web Design", image: ecomproj },
  { id: 4, title: "ReactJS Dashboard", category: "Framework", subCategory: "ReactJS", image: react },
  { id: 5, title: "Laravel Admin Panel", category: "Framework", subCategory: "Laravel", image: laravel },
  { id: 6, title: "Python Data Analysis", category: "Language Programming", subCategory: "Python", image: python },
];

const ProjectCard = ({ title, category, subCategory, image }: { 
  title: string; 
  category: string; 
  subCategory?: string;
  image: string 
}) => (
  <div className="w-3/4  bg-white p-3 rounded-xl shadow-md transition-transform transform hover:scale-105 max-w-xs mx-auto">
    <div className="relative h-48">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="rounded-lg object-cover" 
      />
    </div>
    <p className="text-orange-500 text-sm mt-2 font-semibold">
      {subCategory || category}
    </p>
    <h3 className="text-md font-semibold mt-1">{title}</h3>
  </div>
);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedSubCategory) return project.subCategory === selectedSubCategory;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-12 px-6 text-center mt-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <p className="text-gray-600 mt-2 mb-8 max-w-xl mx-auto">
        Explore my work across different categories including web design, frameworks, and programming languages.
      </p>
      
      <div className="flex justify-center flex-wrap gap-3 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => { 
              setSelectedCategory(category); 
              setSelectedSubCategory(null); 
            }}
            className={`px-4 py-2 rounded border transition-all font-medium text-sm shadow-sm ${
              selectedCategory === category 
                ? "bg-orange-500 text-white border-orange-500" 
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory in subCategories && (
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {subCategories[selectedCategory].map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubCategory(sub)}
              className={`px-3 py-1 rounded border transition-all text-sm shadow-sm ${
                selectedSubCategory === sub 
                  ? "bg-orange-400 text-white border-orange-400" 
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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