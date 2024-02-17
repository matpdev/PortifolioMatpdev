"use client";

import React from "react";
import Link from "next/link";
import styles from "@css/components/parts/linksIndex.module.css";
import { FiGithub, FiInstagram, FiLink, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function LinksIndex({ linkWeb, linkGithub, linkLinkedinPost }) {
  return (
    <div className={styles.LinksIndex}>
      {linkWeb && (
        <Link href={linkWeb} target="_blank" rel="noopener noreferrer">
          <FiLink size={20}></FiLink>
        </Link>
      )}
      {linkGithub && (
        <Link href={linkGithub} target="_blank" rel="noopener noreferrer">
          <FiGithub size={20}></FiGithub>
        </Link>
      )}
      {linkLinkedinPost && (
        <Link href={linkLinkedinPost} target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={20}></FiLinkedin>
        </Link>
      )}
    </div>
  );
}
