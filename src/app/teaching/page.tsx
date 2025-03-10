"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaYoutube, FaGraduationCap, FaChalkboardTeacher, FaCode, FaExternalLinkAlt } from "react-icons/fa";

// Teaching data
const teachingExperience = [
  {
    title: "Web Development Bootcamp",
    institution: "Tech Academy",
    period: "2021 - Present",
    description:
      "Leading a comprehensive 12-week bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Guiding students through building full-stack applications from scratch.",
    topics: ["Frontend Development", "Backend Development", "Database Design", "Deployment"],
  },
  {
    title: "Data Structures and Algorithms",
    institution: "Computer Science Institute",
    period: "2020 - Present",
    description:
      "Teaching advanced data structures and algorithms to computer science students. Focusing on problem-solving techniques, time complexity analysis, and optimization strategies.",
    topics: ["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Dynamic Programming"],
  },
  {
    title: "JavaScript Masterclass",
    institution: "Online Learning Platform",
    period: "2019 - Present",
    description:
      "Conducting an online masterclass on advanced JavaScript concepts, including closures, prototypes, async programming, and modern ES6+ features.",
    topics: ["Advanced JavaScript", "Functional Programming", "Asynchronous JS", "Design Patterns"],
  },
];

// Courses data
const courses = [
  {
    title: "Modern React Development",
    platform: "Udemy",
    students: 5000,
    rating: 4.8,
    link: "https://udemy.com/course/modern-react",
    description:
      "A comprehensive course on modern React development, covering hooks, context API, Redux, and integration with backend services.",
  },
  {
    title: "Full Stack Web Development",
    platform: "Coursera",
    students: 3500,
    rating: 4.7,
    link: "https://coursera.org/course/fullstack",
    description:
      "An in-depth course on full stack web development using the MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    title: "Data Structures for Coding Interviews",
    platform: "edX",
    students: 4200,
    rating: 4.9,
    link: "https://edx.org/course/dsa-interviews",
    description:
      "A practical course on data structures and algorithms focused on solving coding interview questions efficiently.",
  },
];

// YouTube videos data
const youtubeVideos = [
  {
    title: "Building a React App from Scratch",
    views: "250K",
    link: "https://youtube.com/watch?v=react-app",
    thumbnail: "/images/youtube-react.jpg",
  },
  {
    title: "JavaScript Array Methods Explained",
    views: "180K",
    link: "https://youtube.com/watch?v=js-arrays",
    thumbnail: "/images/youtube-javascript.jpg",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    views: "210K",
    link: "https://youtube.com/watch?v=css-layout",
    thumbnail: "/images/youtube-css.jpg",
  },
  {
    title: "Node.js REST API Tutorial",
    views: "195K",
    link: "https://youtube.com/watch?v=nodejs-api",
    thumbnail: "/images/youtube-nodejs.jpg",
  },
];

export default function Teaching() {
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [videosRef, videosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Teaching</h1>
        <p className="text-foreground/80 text-center max-w-3xl mx-auto mb-12">
          I'm passionate about sharing knowledge and helping others learn
          programming and web development. Here's an overview of my teaching
          experience, courses, and educational content.
        </p>

        {/* Teaching Experience */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <FaChalkboardTeacher className="mr-2" /> Teaching Experience
          </h2>

          <div className="space-y-8">
            {teachingExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <p className="text-primary font-medium">{exp.institution}</p>
                  <p className="text-foreground/70">{exp.period}</p>
                </div>
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-secondary px-2 py-1 rounded-md text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Online Courses */}
        <motion.section
          ref={coursesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={coursesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <FaGraduationCap className="mr-2" /> Online Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={coursesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-primary font-medium mb-1">
                    {course.platform}
                  </p>
                  <div className="flex justify-between mb-4">
                    <span className="text-foreground/70 text-sm">
                      {course.students.toLocaleString()} students
                    </span>
                    <span className="text-foreground/70 text-sm">
                      ★ {course.rating}/5
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-4">{course.description}</p>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" /> View Course
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* YouTube Videos */}
        <motion.section
          ref={videosRef}
          initial={{ opacity: 0, y: 20 }}
          animate={videosInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <FaYoutube className="mr-2 text-red-600" /> YouTube Tutorials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={videosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-40 bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaYoutube className="text-red-600 text-5xl" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.views} views
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center gap-1"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" /> Watch Video
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://youtube.com/channel/username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2"
            >
              <FaYoutube className="h-5 w-5" /> Visit My YouTube Channel
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 