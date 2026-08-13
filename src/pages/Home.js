import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/profile.jpg"
          alt="Sowbharani Ganesan"
          className="profile-img"
        />
      </motion.div>

      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3 className="hi">Hi, I'm 👋</h3>

        <h1 className="name">Sowbharani Ganesan</h1>

        <TypeAnimation
          sequence={[
            "🤖 AI/ML Engineer",
            2000,

            "🧠 Machine Learning Engineer",
            2000,

            "📊 Data Science Professional",
            2000,

            "🐍 Python Developer",
            2000,

            "💡 AI & ML Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing-role"
        />

        <p className="home-description">
          B.E. Electronics and Communication Engineering graduate
          specializing in Data Science and AI. Skilled in Python,
          SQL, Machine Learning, Data Analysis, and AI, with a passion
          for building practical and intelligent solutions.
        </p>

        <div className="home-buttons">

          <Link to="/projects">
            <button className="btn view_project">
              🚀 View Projects
            </button>
          </Link>

        </div>

      </motion.div>

    </div>
  );
}

export default Home;