"use client";
import React from "react";
import "./Navbar.css";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const navbarVariants = {
    open: {
      height: "280px",
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
    close: {
      height: "90px",
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  };

  const navbarController = useAnimationControls();

  useEffect(() => {
    if (toggled) {
      navbarController.start("open");
    } else {
      navbarController.start("close");
    }
  }, [toggled]);

  return (
    <>
      <motion.div
        variants={navbarVariants}
        animate={navbarController}
        initial="close"
        className="navbar flex gap-10 items-center px-10 py-5"
      >
        <div className="navbar-brand text-4xl">&#8750;</div>
        <ul className="flex gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </motion.div>
      <div
        className="hamburger flex flex-col gap-2 cursor-pointer"
        onClick={() => {
          setToggled((prevToggled) => !prevToggled);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Navbar;
