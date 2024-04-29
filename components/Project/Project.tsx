'use client';
import React, { useEffect } from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <div className="project mx-auto" data-aos="zoom-in">
        <div className="sectionHeading">
          <h1 className="text-white text-2xl mx-auto w-fit">My projects</h1>
          <div className="cards flex">
            <div className="card">
              <div className="card-details">
                <h2>Vugo (Blog site)</h2>
                <p>
                  Made a blog site for a client using Next.js 13 + Tailwind +
                  Framer Motion and Appwrite.
                </p>
              </div>
              <div className="explore flex mt-5 gap-5 w-fit mx-auto">
                <img
                  src="./github.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://github.com/demss233/vugo');
                  }}
                />
                <img
                  src="./internet.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://vugo-8kka.vercel.app/');
                  }}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-details">
                <h2>Portfolio (Client)</h2>
                <p>
                  Made a simple & static portfolio for a client using pure HTML,
                  CSS and JS.
                </p>
              </div>
              <div className="explore flex mt-5 gap-5 w-fit mx-auto">
                <img
                  src="./github.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open(
                      'https://github.com/demss233/portfolio_template'
                    );
                  }}
                />
                <img
                  src="./internet.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://shivvedant.github.io/portfolio/');
                  }}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-details">
                <h2>Aniline (Personal)</h2>
                <p>
                  Download and watch your favourite anime for free without ads.
                  I made this project out of boredom
                </p>
              </div>
              <div className="explore flex mt-5 gap-5 w-fit mx-auto">
                <img
                  src="./github.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://github.com/demss233/Aniline');
                  }}
                />
                <img
                  src="./internet.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://aniline.cyclic.app/');
                  }}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-details">
                <h2>Argon (Client)</h2>
                <p>
                  A site made with Next.js 13 + Tailwind and AOS for a product
                  called Argon.
                </p>
              </div>
              <div className="explore flex mt-5 gap-5 w-fit mx-auto">
                <img
                  src="./github.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://github.com/demss233/Argon');
                  }}
                />
                <img
                  src="./internet.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    window.open('https://argon-one.vercel.app/');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
