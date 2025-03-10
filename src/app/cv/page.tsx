"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaAward } from "react-icons/fa";

export default function CV() {
  const [headerRef, headerInView] = useInView({
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

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [certificationsRef, certificationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-foreground/80 max-w-3xl mx-auto mb-8">
            Below is my professional resume detailing my education, work
            experience, skills, and certifications. Feel free to download a copy
            for your reference.
          </p>
          <a
            href="/resume.pdf"
            download
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all"
          >
            <FaDownload className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>

        {/* Work Experience */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-primary text-xl mr-2" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold">Senior Full Stack Developer</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p className="text-primary font-medium">Tech Innovations Inc.</p>
                <p className="text-foreground/70">2021 - Present</p>
              </div>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>
                  Led the development of enterprise web applications using React,
                  Node.js, and MongoDB.
                </li>
                <li>
                  Implemented CI/CD pipelines using GitHub Actions and AWS.
                </li>
                <li>
                  Mentored junior developers and conducted code reviews to ensure
                  code quality.
                </li>
                <li>
                  Collaborated with product managers and designers to deliver
                  high-quality user experiences.
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p className="text-primary font-medium">
                  Digital Solutions Ltd.
                </p>
                <p className="text-foreground/70">2018 - 2021</p>
              </div>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>
                  Developed and maintained multiple client projects using React,
                  Express, and PostgreSQL.
                </li>
                <li>
                  Implemented responsive designs and ensured cross-browser
                  compatibility.
                </li>
                <li>
                  Optimized application performance and implemented security best
                  practices.
                </li>
                <li>
                  Participated in agile development processes, including sprint
                  planning and retrospectives.
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p className="text-primary font-medium">WebCraft Agency</p>
                <p className="text-foreground/70">2016 - 2018</p>
              </div>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                <li>
                  Created responsive and interactive user interfaces using HTML,
                  CSS, JavaScript, and React.
                </li>
                <li>
                  Worked closely with designers to implement pixel-perfect
                  designs.
                </li>
                <li>
                  Developed reusable components and implemented state management
                  using Redux.
                </li>
                <li>
                  Conducted browser testing and debugging to ensure optimal user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          ref={educationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-primary text-xl mr-2" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold">
                Master of Computer Science
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p className="text-primary font-medium">Tech University</p>
                <p className="text-foreground/70">2014 - 2016</p>
              </div>
              <p className="text-foreground/80">
                Specialized in Web Technologies and Software Engineering.
                Graduated with distinction.
              </p>
              <p className="text-foreground/80 mt-2">
                <strong>Relevant Coursework:</strong> Advanced Algorithms, Web
                Application Architecture, Cloud Computing, Database Systems.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold">
                Bachelor of Computer Science
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <p className="text-primary font-medium">State University</p>
                <p className="text-foreground/70">2010 - 2014</p>
              </div>
              <p className="text-foreground/80">
                Focused on Programming and Database Management. Participated in
                multiple hackathons and coding competitions.
              </p>
              <p className="text-foreground/80 mt-2">
                <strong>Relevant Coursework:</strong> Data Structures,
                Algorithms, Object-Oriented Programming, Database Design, Web
                Development.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <FaCode className="text-primary text-xl mr-2" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Technical Skills</h3>
                <ul className="list-disc list-inside text-foreground/80 space-y-2">
                  <li>
                    <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript,
                    React, Next.js, Redux, Tailwind CSS, Bootstrap
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express.js, Django, Spring
                    Boot, RESTful APIs, GraphQL
                  </li>
                  <li>
                    <strong>Database:</strong> MongoDB, MySQL, PostgreSQL,
                    Firebase, Redis
                  </li>
                  <li>
                    <strong>DevOps:</strong> Git, Docker, AWS, CI/CD, Vercel,
                    Netlify
                  </li>
                  <li>
                    <strong>Testing:</strong> Jest, React Testing Library,
                    Cypress, Mocha, Chai
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Soft Skills</h3>
                <ul className="list-disc list-inside text-foreground/80 space-y-2">
                  <li>Problem-solving and analytical thinking</li>
                  <li>Team collaboration and communication</li>
                  <li>Project management and organization</li>
                  <li>Time management and prioritization</li>
                  <li>Mentoring and knowledge sharing</li>
                  <li>Adaptability and continuous learning</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          ref={certificationsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <FaAward className="text-primary text-xl mr-2" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-[1px] rounded-md p-4">
                <h3 className="font-bold">AWS Certified Developer - Associate</h3>
                <p className="text-foreground/70">Amazon Web Services</p>
                <p className="text-foreground/70 text-sm">Issued: 2022</p>
              </div>
              <div className="border-[1px] rounded-md p-4">
                <h3 className="font-bold">MongoDB Certified Developer</h3>
                <p className="text-foreground/70">MongoDB, Inc.</p>
                <p className="text-foreground/70 text-sm">Issued: 2021</p>
              </div>
              <div className="border-[1px] rounded-md p-4">
                <h3 className="font-bold">React Developer Certification</h3>
                <p className="text-foreground/70">Meta (formerly Facebook)</p>
                <p className="text-foreground/70 text-sm">Issued: 2020</p>
              </div>
              <div className="border-[1px] rounded-md p-4">
                <h3 className="font-bold">
                  Professional Scrum Master I (PSM I)
                </h3>
                <p className="text-foreground/70">Scrum.org</p>
                <p className="text-foreground/70 text-sm">Issued: 2019</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 