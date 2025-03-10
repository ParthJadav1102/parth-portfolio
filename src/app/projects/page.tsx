"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import Link from "next/link";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image: "/images/project-ecommerce.jpg",
    demoLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/username/ecommerce",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and task tracking.",
    image: "/images/project-taskmanager.jpg",
    demoLink: "https://taskmanager-demo.com",
    githubLink: "https://github.com/username/taskmanager",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
    category: "fullstack",
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "An educational platform for creating and managing online courses with student progress tracking and interactive quizzes.",
    image: "/images/project-lms.jpg",
    demoLink: "https://lms-demo.com",
    githubLink: "https://github.com/username/lms",
    technologies: ["React", "Express", "PostgreSQL", "AWS S3"],
    category: "fullstack",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and contact form.",
    image: "/images/project-portfolio.jpg",
    demoLink: "https://portfolio-demo.com",
    githubLink: "https://github.com/username/portfolio",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and forecasts for multiple locations using the OpenWeather API.",
    image: "/images/project-weather.jpg",
    demoLink: "https://weather-demo.com",
    githubLink: "https://github.com/username/weather",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    category: "frontend",
  },
  {
    id: 6,
    title: "RESTful API Service",
    description:
      "A RESTful API service for managing user data, authentication, and resource management with comprehensive documentation.",
    image: "/images/project-api.jpg",
    demoLink: "https://api-docs-demo.com",
    githubLink: "https://github.com/username/api-service",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    category: "backend",
  },
  {
    id: 7,
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "/images/project-chat.jpg",
    demoLink: "https://chat-demo.com",
    githubLink: "https://github.com/username/chat-app",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    category: "fullstack",
  },
  {
    id: 8,
    title: "Database Management Tool",
    description:
      "A web-based database management tool for visualizing and manipulating database structures and data.",
    image: "/images/project-dbmanager.jpg",
    demoLink: "https://dbmanager-demo.com",
    githubLink: "https://github.com/username/db-manager",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Redis"],
    category: "backend",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) || 
      project.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <FaCode className="mr-2" />;
      case "backend":
        return <FaNodeJs className="mr-2" />;
      case "fullstack":
        return <FaDatabase className="mr-2" />;
      default:
        return <FaCode className="mr-2" />;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <p className="text-foreground/80 text-center max-w-3xl mx-auto mb-12">
          Explore my portfolio of web development projects. Each project
          showcases different skills and technologies I've worked with.
        </p>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("frontend")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "frontend"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter("backend")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "backend"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "fullstack"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Full Stack
            </button>
          </div>
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="project-card bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-secondary relative">
                  <div className="absolute top-2 right-2 bg-card px-2 py-1 rounded-md text-xs font-medium flex items-center">
                    {getCategoryIcon(project.category)}
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-card-foreground/30 text-lg font-medium">
                    Project Image
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary px-2 py-1 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <FaExternalLinkAlt className="h-3 w-3" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <FaGithub className="h-3 w-3" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70">
              No projects found matching your criteria. Try adjusting your
              filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 