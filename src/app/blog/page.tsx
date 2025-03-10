"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaTags } from "react-icons/fa";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    excerpt:
      "Learn the basics of React, including components, props, state, and hooks. This guide will help you get started with building your first React application.",
    date: "June 15, 2023",
    author: "Parth",
    tags: ["React", "JavaScript", "Web Development"],
    readTime: "8 min read",
    slug: "getting-started-with-react",
  },
  {
    id: 2,
    title: "Understanding TypeScript: Why You Should Use It",
    excerpt:
      "TypeScript adds static typing to JavaScript, making your code more robust and easier to maintain. Discover the benefits of using TypeScript in your projects.",
    date: "July 22, 2023",
    author: "Parth",
    tags: ["TypeScript", "JavaScript", "Programming"],
    readTime: "6 min read",
    slug: "understanding-typescript",
  },
  {
    id: 3,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to building RESTful APIs using Node.js and Express. Learn about routing, middleware, error handling, and best practices.",
    date: "August 10, 2023",
    author: "Parth",
    tags: ["Node.js", "Express", "API", "Backend"],
    readTime: "10 min read",
    slug: "building-restful-apis",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "Understand the differences between CSS Grid and Flexbox, and learn when to use each layout system for optimal results in your web designs.",
    date: "September 5, 2023",
    author: "Parth",
    tags: ["CSS", "Web Design", "Frontend"],
    readTime: "7 min read",
    slug: "css-grid-vs-flexbox",
  },
  {
    id: 5,
    title: "Introduction to Next.js: The React Framework",
    excerpt:
      "Discover Next.js, the React framework that enables server-side rendering, static site generation, and more. Learn how to build fast and SEO-friendly web applications.",
    date: "October 18, 2023",
    author: "Parth",
    tags: ["Next.js", "React", "Frontend", "SSR"],
    readTime: "9 min read",
    slug: "introduction-to-nextjs",
  },
  {
    id: 6,
    title: "Mastering MongoDB: Tips and Tricks",
    excerpt:
      "Take your MongoDB skills to the next level with these advanced tips and tricks. Learn about indexing, aggregation, performance optimization, and more.",
    date: "November 30, 2023",
    author: "Parth",
    tags: ["MongoDB", "Database", "Backend"],
    readTime: "11 min read",
    slug: "mastering-mongodb",
  },
];

export default function Blog() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [postsRef, postsInView] = useInView({
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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Welcome to my blog where I share insights, tutorials, and thoughts on
            web development, programming, and technology.
          </p>
        </motion.div>

        <motion.div
          ref={postsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={postsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block hover:text-primary transition-colors"
                >
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                </Link>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-secondary px-2 py-1 rounded-md text-xs flex items-center"
                    >
                      <FaTags className="mr-1 h-3 w-3" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-foreground/60">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1 h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-1 h-3 w-3" /> {post.author}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70">
            More blog posts coming soon! Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
  );
} 