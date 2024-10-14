"use client";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

import projectImg1 from "@/assets/images/web-design-1.svg";
import projectImg2 from "@/assets/images/web-design-2.svg";
import projectImg3 from "@/assets/images/web-design-3.svg";

const projects = [
  {
    id: 1,
    category: "Web Design",
    name: "AirCalling Landing Page Design",
    image: projectImg1,
  },
  {
    id: 2,
    category: "Web Design",
    name: "Business Landing Page Design ",
    image: projectImg2,
  },
  {
    id: 3,
    category: "Web Design",
    name: "Ecom Web Page Design ",
    image: projectImg3,
  },
];

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  return (
    <section id="projects" className="container mx-auto p-6 my-10">
      <SectionHeader title="My Projects">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </SectionHeader>

      {/* Tab Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            className={`border text-xl hover:bg-pumpkin-600 hover:text-white ${
              activeCategory === category
                ? "bg-pumpkin-600 text-white"
                : "dark:bg-zinc-100 dark:text-black"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Tab content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="space-y-4">
            <div className="bg-[#ffebdb] rounded-xl">
              <Image
                src={project.image}
                alt={project.name}
                className="mx-auto h-full"
              />
            </div>
            <p className="text-pumpkin-600">{project.category}</p>
            <h4 className="font-bold">{project.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
