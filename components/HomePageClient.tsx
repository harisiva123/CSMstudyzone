"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  BeakerIcon,
  LightBulbIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function HomePageClient() {
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

  const topics = [
    { name: "C Programming", icon: "C" },
    { name: "C++ & OOP", icon: "C++" },
    { name: "Python & Scripting", icon: "🐍" },
    { name: "Java Basics", icon: "☕" },
    { name: "Data Structures & Algorithms", icon: "📊" },
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "DBMS & SQL", icon: "🗄️" },
    { name: "Web Development Basics", icon: "🌐" },
    { name: "Coding Contests & Interview Prep", icon: "🏆" },
  ];

  const upcomingContests = [
    {
      name: "Weekly Challenge #1",
      level: "Beginner",
      date: "March 15, 2024",
    },
    {
      name: "Algorithm Mastery",
      level: "Intermediate",
      date: "March 22, 2024",
    },
    {
      name: "Data Structures Sprint",
      level: "Advanced",
      date: "March 29, 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-violet-50">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
                  Interactive Learning Platform
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Learn Programming, AI & ML — The Smart Way
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                CSM Study Zone is your all-in-one space to master programming
                languages, data structures, algorithms, AI & ML concepts, lab
                experiments, and real-world projects. Whether you're a beginner
                or an advanced learner, explore curated notes, hands-on labs,
                coding practice and contests in one place.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/programming"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  aria-label="Start Learning"
                >
                  Start Learning
                </Link>
                <Link
                  href="/notes"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                  aria-label="Explore AI & ML Notes"
                >
                  Explore AI & ML Notes
                </Link>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-500 pt-2"
              >
                Trusted by students, self-learners, and educators across
                different universities.
              </motion.p>

              <motion.ul
                variants={itemVariants}
                className="space-y-2 text-sm text-gray-600 list-disc list-inside"
              >
                <li>Comprehensive notes with examples and diagrams</li>
                <li>Hands-on lab experiments with step-by-step guides</li>
                <li>Real-world project ideas and implementations</li>
                <li>Interactive coding practice and contests</li>
              </motion.ul>
            </motion.div>

            {/* Right Column - Illustration Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-200">
                {/* Code Editor Snippet */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500 ml-2">main.cpp</span>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div>
                      <span className="text-purple-400">#include</span>{" "}
                      <span className="text-yellow-400">&lt;iostream&gt;</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-blue-400">int</span>{" "}
                      <span className="text-white">main</span>
                      <span className="text-gray-500">()</span>{" "}
                      <span className="text-gray-500">{"{"}</span>
                    </div>
                    <div className="mt-1 ml-4">
                      <span className="text-blue-400">std::</span>
                      <span className="text-white">cout</span>{" "}
                      <span className="text-gray-500">&lt;&lt;</span>{" "}
                      <span className="text-yellow-400">
                        "Hello, CSM Study Zone!"
                      </span>
                      <span className="text-gray-500">;</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-gray-500">{"}"}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Widget */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Learning Progress
                    </span>
                    <span className="text-sm font-bold text-blue-600">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[68%]"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    12 of 18 courses completed
                  </p>
                </div>

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "Python", "AI", "ML", "DS", "Java"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <BookOpenIcon className="w-12 h-12 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Notes & Concept Maps
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Clean, exam-friendly notes for C, C++, Python, Java, AI & ML,
                Data Structures, DBMS and more.
              </p>
              <Link
                href="/notes"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Browse Notes →
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <BeakerIcon className="w-12 h-12 text-green-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Lab Manuals & Experiments
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Step-by-step lab guides with aim, algorithm, flowchart,
                program, output, viva questions and use-cases.
              </p>
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Open Labs →
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <LightBulbIcon className="w-12 h-12 text-purple-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                Project Ideas & Implementations
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mini and major project ideas with problem statements, tech stack
                suggestions and implementation tips.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group-hover:gap-3 transition-all duration-300"
              >
                View Projects →
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <CodeBracketIcon className="w-12 h-12 text-orange-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                Programming Practice & Challenges
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Solve coding tasks in C, C++, Java and Python, track scores,
                and prepare for interviews & contests.
              </p>
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Start Practicing →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What You Can Learn Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                What You Can Learn on CSM Study Zone
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick your path and explore structured content from fundamentals to
              advanced topics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {topics.map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer text-center"
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <p className="text-sm font-semibold text-gray-700">
                  {topic.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              How CSM Study Zone Helps You Learn
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "1",
              title: "Learn the Concepts",
              description:
                "Use concise notes, diagrams, and concept maps to understand the theory quickly.",
              icon: AcademicCapIcon,
              color: "blue",
            },
            {
              number: "2",
              title: "Code & Experiment",
              description:
                "Practice with example programs, lab exercises, and hands-on coding challenges.",
              icon: BeakerIcon,
              color: "green",
            },
            {
              number: "3",
              title: "Build & Compete",
              description:
                "Implement mini projects, participate in weekly coding contests, and track your progress.",
              icon: RocketLaunchIcon,
              color: "purple",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${
                step.color === "blue" ? "from-blue-500 to-blue-600" :
                step.color === "green" ? "from-green-500 to-green-600" :
                "from-purple-500 to-purple-600"
              } flex items-center justify-center text-white text-2xl font-bold`}>
                {step.number}
              </div>
              <step.icon className={`w-12 h-12 mx-auto mb-4 ${
                step.color === "blue" ? "text-blue-600" :
                step.color === "green" ? "text-green-600" :
                "text-purple-600"
              }`} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why CSM Study Zone Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Learners Love CSM Study Zone
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Structured content from basics to advanced",
              "Lab-ready programs with flowcharts & outputs",
              "AI & ML notes aligned with latest tools",
              "Practice mode with challenges and contests",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircleIcon className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "50+", label: "Lab Experiments" },
              { number: "100+", label: "Programming Examples" },
              { number: "25+", label: "Project Ideas" },
              { number: "10K+", label: "Lines of Sample Code" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-md"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Contests Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Upcoming Coding Contests
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {upcomingContests.map((contest, index) => (
            <motion.div
              key={contest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {contest.name}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    contest.level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : contest.level === "Intermediate"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {contest.level}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{contest.date}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contests"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="View all contests"
          >
            View all contests →
          </Link>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to Level Up Your Programming Skills?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of learners who are mastering programming, AI & ML,
              and building real-world projects with CSM Study Zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programming/c-language"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Start with C Programming"
              >
                Start with C Programming
              </Link>
              <Link
                href="/notes"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                aria-label="Browse All Notes"
              >
                Browse All Notes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

