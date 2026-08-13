import React from "react";
import { motion } from "framer-motion";
import "../css/about.css";

function About() {
  return (
    <div className="about-container">

      {/* About Me */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>

        <p>
          I am an <span>AI/ML Engineer</span> with a strong foundation in
          Data Science and Artificial Intelligence. I enjoy working with
          Python, SQL, Machine Learning, and data-driven technologies to
          develop practical and intelligent solutions.
        </p>

        <p>
          I have a strong interest in <span>Machine Learning, Data Analysis,
          Predictive Modeling, and AI</span>. I focus on understanding data,
          building effective models, and solving real-world problems using
          technology.
        </p>

        <p>
          As a fresher, I am looking forward to starting my career in the
          AI/ML and Data Science field, while continuously improving my
          technical skills and contributing to meaningful projects.
        </p>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {[
            "Python",
            "SQL",
            "MySQL",
            "Machine Learning",
            "Artificial Intelligence",
            "Data Analysis",
            "Pandas",
            "NumPy",
            "EDA",
            "Feature Engineering",
            "Predictive Modeling",
            "OpenCV",
            "Git & GitHub",
            "Jupyter Notebook",
            "Google Colab",
            "VS Code"
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        className="education-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Education</h2>

        <div className="education-grid">

          <motion.div
            className="education-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>B.E. Electronics and Communication Engineering</h3>
            <p>Adithya Institute of Technology</p>
            <p>Specialization: Data Science and AI</p>
            <p>2022 – 2026</p>
            <p>CGPA: 7.5 / 10</p>
          </motion.div>

        </div>
      </motion.section>

      {/* Why Work With Me */}
      <motion.section
        className="why-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Why Work With Me</h2>

        <div className="why-grid">
          {[
            {
              title: "Problem Solver",
              desc: "I enjoy solving real-world problems using data, AI, and machine learning."
            },
            {
              title: "Data-Driven Thinking",
              desc: "I focus on understanding data and finding meaningful insights from it."
            },
            {
              title: "AI & ML Skills",
              desc: "Strong foundation in Python, machine learning, data analysis, and AI concepts."
            },
            {
              title: "Continuous Learning",
              desc: "Always improving my technical knowledge and exploring new AI technologies."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="why-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}

export default About;