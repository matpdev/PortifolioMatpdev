"use client";

import React from "react";
import styles from "@css/components/parts/links.module.css";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Links() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.Links}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <a
          href="https://www.instagram.com/matheus_alvesdg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram size={30}></FiInstagram>
        </a>
        <a
          href="http://github.com/matpdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={30}></FiGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-alves-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={30}></FiLinkedin>
        </a>
        <div className={styles.verticalLine}></div>
      </motion.div>
      <motion.div
        className={styles.Email}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <a href="mailto:matheus2ep@gmail.com">matheus2ep@gmail.com</a>
        <div className={styles.verticalLine}></div>
      </motion.div>
    </AnimatePresence>
  );
}
