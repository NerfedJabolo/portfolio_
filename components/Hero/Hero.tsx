"use client";
import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <div className="hero flex flex-col g-2 mx-auto" data-aos="zoom-in">
        <h1 className="text-white text-5xl font-semibold">Shiv Satyam</h1>
        <h2 className="mt-7 text-2xl">
          Web Developer / Competitive Programmer / ML Enthusiast.
        </h2>
        <div className="flex gap-4 mt-12 w-fit mx-auto hero__buttons">
          <button>About me</button>
          <button>Discord</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
