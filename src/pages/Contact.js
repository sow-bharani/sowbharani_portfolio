import React from "react";
import "../css/contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">

      {/* TITLE */}
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out through any platform below
      </motion.p>

      {/* CONTACT CARDS */}
      <div className="contact-wrapper">

        <div className="contact-grid">

          {/* EMAIL */}
          <motion.a
            href="mailto:sowbharani646@gmail.com"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaEnvelope />
            <h3>Email</h3>
            <p>sowbharani646@gmail.com</p>
          </motion.a>

          {/* PHONE */}
          <motion.a
            href="tel:+918072716591"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FaPhoneAlt />
            <h3>Phone</h3>
            <p>+91 80727 16591</p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/918072716591"
            target="_blank"
            rel="noreferrer"
            className="contact-card whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaWhatsapp />
            <h3>WhatsApp</h3>
            <p>Chat with me</p>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            href="https://github.com/sow-bharani"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaGithub />
            <h3>GitHub</h3>
            <p>View my projects</p>
          </motion.a>

        </div>

      </div>

    </div>
  );
}

export default Contact;