"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiRedis,
} from "react-icons/si";

// Tech stack data
const techStack = {
  frontend: [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-4xl text-[#E34F26]" />,
      description:
        "Semantic HTML5 markup for structuring web content with accessibility in mind.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-4xl text-[#1572B6]" />,
      description:
        "Advanced CSS3 styling with flexbox, grid, animations, and responsive design.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-4xl text-[#F7DF1E]" />,
      description:
        "Modern ES6+ JavaScript for building interactive and dynamic web applications.",
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl text-[#61DAFB]" />,
      description:
        "Component-based UI development with React, including hooks, context, and state management.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-4xl" />,
      description:
        "React framework for production with server-side rendering, static site generation, and API routes.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" />,
      description:
        "Utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-4xl text-[#7952B3]" />,
      description:
        "Responsive, mobile-first front-end framework for faster and easier web development.",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-[#339933]" />,
      description:
        "JavaScript runtime for building scalable server-side applications and APIs.",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl" />,
      description:
        "Fast, unopinionated, minimalist web framework for Node.js for building web applications and APIs.",
    },
    {
      name: "Django",
      icon: <SiDjango className="text-4xl text-[#092E20]" />,
      description:
        "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-4xl text-[#6DB33F]" />,
      description:
        "Java-based framework for building production-ready applications with minimal configuration.",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-4xl text-[#E10098]" />,
      description:
        "Query language for APIs and a runtime for executing those queries with existing data.",
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-[#47A248]" />,
      description:
        "NoSQL document database for building scalable and flexible modern applications.",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-4xl text-[#4479A1]" />,
      description:
        "Open-source relational database management system for structured data storage.",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-4xl text-[#336791]" />,
      description:
        "Advanced open-source relational database with strong reputation for reliability and data integrity.",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-[#FFCA28]" />,
      description:
        "Platform for building web and mobile applications without server-side programming.",
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-4xl text-[#DC382D]" />,
      description:
        "In-memory data structure store used as a database, cache, and message broker.",
    },
  ],
  other: [
    {
      name: "Git",
      icon: <FaGitAlt className="text-4xl text-[#F05032]" />,
      description:
        "Distributed version control system for tracking changes in source code during development.",
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-4xl text-[#2496ED]" />,
      description:
        "Platform for developing, shipping, and running applications in containers.",
    },
    {
      name: "AWS",
      icon: <FaAws className="text-4xl text-[#FF9900]" />,
      description:
        "Cloud computing platform offering reliable, scalable, and inexpensive cloud computing services.",
    },
    {
      name: "REST API",
      icon: <FaDatabase className="text-4xl text-[#4CAF50]" />,
      description:
        "Architectural style for designing networked applications with stateless operations.",
    },
  ],
};

export default function TechStack() {
  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [databaseRef, databaseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [otherRef, otherInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Tech Stack</h1>
        <p className="text-foreground/80 text-center max-w-3xl mx-auto mb-12">
          Here's a comprehensive overview of the technologies and tools I work
          with. I'm constantly learning and expanding my skill set to stay
          current with the latest industry trends.
        </p>

        {/* Frontend Technologies */}
        <motion.section
          ref={frontendRef}
          initial="hidden"
          animate={frontendInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frontend Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.frontend.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-foreground/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Backend Technologies */}
        <motion.section
          ref={backendRef}
          initial="hidden"
          animate={backendInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Backend Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.backend.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-foreground/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Database Technologies */}
        <motion.section
          ref={databaseRef}
          initial="hidden"
          animate={databaseInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Database Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.database.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-foreground/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Technologies */}
        <motion.section
          ref={otherRef}
          initial="hidden"
          animate={otherInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Other Technologies & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.other.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-foreground/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
} 