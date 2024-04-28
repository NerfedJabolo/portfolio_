"use client";
import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <div className="about mx-auto" data-aos="zoom-in">
        <div className="sectionHeading">
          <h1 className="text-white text-2xl mx-auto w-fit">About me</h1>
          <p className="mt-10 text-center">
            I am Shiv Satyam, a 17-year-old from Delhi, India, eager to share my
            journey in programming with you. It all started when I was 11,
            tinkering with code and discovering my passion for tech. I began as
            a web developer, but lately, I have been diving into React Native. I
            also love competing on platforms like CodeChef, HackerRank, and
            Codeforces. It keeps me on my toes! What really gets me going is
            exploring Machine Learning and Artificial Intelligence. They are
            like puzzles waiting to be solved, and I am excited to learn more.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
