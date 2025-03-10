"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

// Skills data
const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 88 },
    { name: "Django", level: 75 },
    { name: "Spring Boot", level: 70 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 80 },
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "Firebase", level: 82 },
  ],
  other: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "Testing", level: 80 },
  ],
};

// Experience data
const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Leading development of enterprise web applications using React, Node.js, and MongoDB. Implementing CI/CD pipelines and mentoring junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client projects using React, Express, and PostgreSQL. Collaborated with design and product teams to deliver high-quality web applications.",
  },
  {
    title: "Frontend Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description:
      "Created responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. Worked closely with designers to implement pixel-perfect designs.",
  },
];

// Education data
const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description:
      "Specialized in Web Technologies and Software Engineering. Graduated with distinction.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description:
      "Focused on Programming and Database Management. Participated in multiple hackathons and coding competitions.",
  },
];

export default function About() {
  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        {/* Bio Section */}
        <motion.section
          ref={bioRef}
          initial={{ opacity: 0, y: 20 }}
          animate={bioInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Parth</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              I'm a passionate Full Stack Developer with over 5 years of
              experience in building modern web applications. I specialize in
              both frontend and backend technologies, with a strong focus on
              creating responsive, user-friendly, and performant applications.
            </p>
            <p className="text-foreground/80 mb-4">
              My journey in web development started during my university years,
              where I discovered my passion for creating digital experiences.
              Since then, I've worked with various technologies and frameworks,
              constantly learning and adapting to the ever-evolving tech
              landscape.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you can find me teaching web development,
              contributing to open-source projects, or exploring new
              technologies. I believe in continuous learning and sharing
              knowledge with the community.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <div className="absolute inset-0 bg-secondary flex items-center justify-center text-foreground/30">
                Profile Photo
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaCode className="text-primary text-xl mr-2" />
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="skill-progress-bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaServer className="text-primary text-xl mr-2" />
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="skill-progress-bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-primary text-xl mr-2" />
                <h3 className="text-xl font-bold">Database</h3>
              </div>
              <div className="space-y-4">
                {skills.database.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="skill-progress-bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaTools className="text-primary text-xl mr-2" />
                <h3 className="text-xl font-bold">Other</h3>
              </div>
              <div className="space-y-4">
                {skills.other.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="skill-progress-bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-foreground/70">{exp.period}</p>
                </div>
                <p className="text-foreground/80">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={educationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={educationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-foreground/70">{edu.period}</p>
                </div>
                <p className="text-foreground/80">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
} 