"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">Parth</span>
              <br />
              Full Stack Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            >
              I build modern, responsive, and performant web applications using
              cutting-edge technologies. Specializing in both frontend and
              backend development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
              >
                View My Projects
                <FaArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                5+
              </h3>
              <p className="text-foreground/70 mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                50+
              </h3>
              <p className="text-foreground/70 mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                20+
              </h3>
              <p className="text-foreground/70 mt-2">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                10+
              </h3>
              <p className="text-foreground/70 mt-2">Technologies</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Check out some of my recent work. These projects showcase my skills
              in frontend, backend, and full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="project-card bg-card rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center text-card-foreground/30 text-lg font-medium">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-foreground/70 mb-4">
                  A full-stack e-commerce platform with user authentication,
                  product management, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    React
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    Node.js
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    MongoDB
                  </span>
                </div>
                <Link
                  href="/projects"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  View Details <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card bg-card rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center text-card-foreground/30 text-lg font-medium">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Task Management App
                </h3>
                <p className="text-foreground/70 mb-4">
                  A collaborative task management application with real-time
                  updates and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    Next.js
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    Firebase
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    Tailwind
                  </span>
                </div>
                <Link
                  href="/projects"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  View Details <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card bg-card rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center text-card-foreground/30 text-lg font-medium">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Learning Management System
                </h3>
                <p className="text-foreground/70 mb-4">
                  An educational platform for creating and managing online
                  courses with student progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    React
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    Express
                  </span>
                  <span className="bg-secondary px-2 py-1 rounded-md text-xs">
                    PostgreSQL
                  </span>
                </div>
                <Link
                  href="/projects"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  View Details <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2"
            >
              View All Projects <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
