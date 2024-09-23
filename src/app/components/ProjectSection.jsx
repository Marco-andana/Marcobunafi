"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Game tutorial web app",
    description: "Web app that built with React JS and Next JS. An app that give the user video based game tutorial.",
    image: "/images/gamemaster.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Marco-andana/GameTutorial-WebApp",
    previewUrl: "https://game-tutorial-web-mmavqovvk-marco-andanas-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Animated Personal Web",
    description: "Website for personal purpose (Portfolio) that built using Typescript",
    image: "/images/animated-personal.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Marco-andana/animated_personal_web",
    previewUrl: "https://animated-personal-web.vercel.app/",
  },
  {
    id: 3,
    title: "3d Personal Web",
    description: "Website portfolio with 3d image that built using three JS",
    image: "/images/3dpersonal.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Marco-andana/3d_personal_web",
    previewUrl: "https://3d-personal-web.vercel.app/",
  },
  {
    id: 4,
    title: "Shoe shop website",
    description: "My First ever website that i've build using html,css, and vanilla javascript.",
    image: "/images/shoeshop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Marco-andana/Shoe-Shop-Landing-Page",
    previewUrl: "https://vercel.com/marco-andanas-projects",
  },
  {
    id: 5,
    title: "To-do web app",
    description: "A To-do web application that built with Javascript. Can be used for put a list of todos.",
    image: "/images/todoapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Marco-andana/Todo-app",
    previewUrl: "https://marco-andana.github.io/Todo-app/",
  },
]; 

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML/AI"
          isSelected={tag === "ML/AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
