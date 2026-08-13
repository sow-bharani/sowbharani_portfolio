import React from "react";
import { motion } from "framer-motion";
import "../css/projects.css";

function Projects() {

  const projects = [
    {
      title: "Gold Rate Prediction",
      description:
        "Machine learning project that predicts gold prices using historical data and data analysis techniques.",
      github: "https://github.com/sow-bharani"
    },
    {
      title: "Image Classification",
      description:
        "Computer vision project for classifying images using Python and image processing techniques.",
      github: "https://github.com/sow-bharani"
    },
    {
      title: "Resume Screening",
      description:
        "AI-powered project that analyzes resumes and helps identify relevant candidates based on job requirements.",
      github: "https://github.com/sow-bharani"
    },
  ];

  return (

    <div className="projects-container">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="project-card"

            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="view-link">View on GitHub →</span>

          </motion.a>

        ))}

      </div>

    </div>

  );
}

export default Projects;  