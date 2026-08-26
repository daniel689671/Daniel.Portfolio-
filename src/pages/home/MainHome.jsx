import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import { ArrowUpRight, Github } from "lucide-react";

// Tech Images
import java from "../../assets/javascript.jpg";
import html from "../../assets/html.png";
import css from "../../assets/csslogo.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import postman from "../../assets/portman.png";
import vercel from "../../assets/vercel.webp";
import vite from "../../assets/vite.jpg";
import python from "../../assets/python.jpg";
import figma from "../../assets/figma.jpg";
import nodemon from "../../assets/nodemon.png";
import express from "../../assets/express.png";
import TypeScript from "../../assets/Typescript.png";
import tailwind from "../../assets/tailwind.png";
import render from "../../assets/render.png";

// Project Screenshots (static images saved in assets)
import allCountriesImg from "../../assets/allCountriesImg .png";
import realEstateImg from "../../assets/realEstateImg.png";
import eCommerceImg from "../../assets/eCommerceImg .png";
import worknest from "../../assets/worknest13.png";
import growth from "../../assets/voloo.png";
import spaceImg from "../../assets/space.png";
import credixa from "../../assets/credixa.png";

export default function MainHome() {
  // useEffect(() => {
  //   ScrollReveal().reveal(".download", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "20px",
  //     delay: 100,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".years", {
  //     duration: 2000,
  //     origin: "right",
  //     distance: "300px",
  //     delay: 100,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".express", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "400px",
  //     delay: 200,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".three", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "400px",
  //     delay: 250,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".typeScript", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "400px",
  //     delay: 250,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".linked", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "300px",
  //     delay: 250,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".git", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "400px",
  //     delay: 300,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".insta", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "200px",
  //     delay: 200,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".whats", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "100px",
  //     delay: 150,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".postman", {
  //     duration: 5000,
  //     origin: "bottom",
  //     distance: "100px",
  //     delay: 150,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".java", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".react", {
  //     duration: 2000,
  //     origin: "right",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".css", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".html", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".figma", {
  //     duration: 2000,
  //     origin: "right",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".tailwind", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".node", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".eCommerce", {
  //     duration: 2000,
  //     origin: "bottom",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".real", {
  //     duration: 5000,
  //     origin: "rigth",
  //     distance: "400px",
  //     delay: 100,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".vite", {
  //     duration: 2000,
  //     origin: "left",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".vercel", {
  //     duration: 2000,
  //     origin: "right",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".nodemon", {
  //     duration: 2000,
  //     origin: "bottom",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".render", {
  //     duration: 2000,
  //     origin: "bottom",
  //     distance: "900px",
  //     delay: 150,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".country", {
  //     duration: 2000,
  //     origin: "top",
  //     distance: "500px",
  //     delay: 100,
  //     reset: true,
  //   });
  // }, []);

  return (
    <div className="w-full bg-black text-white py-2 px-6 md:px-16">
      {/* <div className="items-center justify-center flex-col flex download">
        <div className="mt-20 flex sm:grid sm:grid-cols-4 flex-wrap gap-4 text-[10px] font-extrabold text-gray-600 dark:text-gray-300"> */}
      {/* HTML */}
      {/* <div className="flex items-center mb-2 flex-cols html">
            <span className="px-2 py-1 rounded flex gap-1">
              <img src={html} alt="HTML" className="md:w-30 w-27 h-15" />
              <p className="font-semibold text-2xl">HTML</p>
            </span>
          </div> */}

      {/* CSS */}
      {/* <div className="flex items-center mb-2 flex-cols css">
            <span className="px-2 py-1 rounded flex gap-1">
              <img src={css} alt="CSS" className="md:w-35 w-32 h-14" />
              <p className="font-semibold text-2xl">CSS</p>
            </span>
          </div> */}

      {/* React */}
      {/* <div className="flex items-center flex-cols react">
            <span className="px-2 py-1 rounded flex">
              <img src={react} alt="React" className="w-53 h-15" />
            </span>
          </div> */}

      {/* JavaScript */}
      {/* <div className="flex items-center mb-2 flex-cols java">
            <span className="px-2 py-1 rounded flex gap-1 mb-1">
              <img src={java} alt="JavaScript" className="w-35 h-15" />
              <p className="font-semibold text-2xl">JavaScript</p>
            </span>
          </div> */}

      {/* Node.js */}
      {/* <div className="flex items-center mb-2 flex-cols node">
            <span className="px-2 py-1 rounded flex gap-1 ml-0.5">
              <img src={node} alt="Node.js" className="md:w-53 w-30 h-15" />
              <p className="font-semibold text-2xl">NODE.JS</p>
            </span>
          </div> */}

      {/* Python */}
      {/* <div className="flex items-center mb-2 flex-cols python">
            <span className="px-2 py-1 rounded flex gap-1">
              <img src={python} alt="Python" className="w-37 h-15" />
              <p className="font-semibold text-2xl">Python</p>
            </span>
          </div> */}

      {/* Express */}
      {/* <div className="flex items-center mb-2 flex-cols express">
            <span className="px-2 py-1 rounded flex gap-1 ml-2">
              <img
                src={express}
                alt="Express"
                className="bg-gray-100 w-40 h-15"
              />
              <p className="font-semibold text-2xl">EXPRESS</p>
            </span>
          </div> */}

      {/* Nodemon */}
      {/* <div className="flex items-center flex-cols nodemon">
            <span className="px-2 py-1 rounded flex gap-1 ml-1">
              <img src={nodemon} alt="Nodemon" className="md:w-35 w-30 h-15" />
              <p className="font-semibold text-2xl">NODEMON</p>
            </span>
          </div> */}

      {/* TypeScript */}
      {/* <div className="flex items-center flex-cols typeScript">
            <span className="px-2 py-1 rounded flex gap-1 ml-1">
              <img src={TypeScript} alt="TypeScript" className="w-35 h-15" />
              <p className="font-semibold text-2xl">TYPESCRIPT</p>
            </span>
          </div> */}
      {/* </div>
      </div> */}

      {/* Featured Projects */}
      <div className="max-w-6xl text-left mx-auto mt-30 mb-17">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-400 mt-3">
          Here are some of the selected projects that showcase my passion for
          Full-Stack development.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 mb-14 gap-12 items-start">
        <div className="bg-[#111] p-5 rounded-xl text-left shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Full-Stack Project
          </span>

          <img
            src={credixa}
            alt="Credixa Online Banking Platform"
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            Credixa Online Banking Platform
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Credixa is a full-stack online banking platform that enables users
            to securely manage their accounts, monitor balances and
            transactions, transfer funds, and manage their banking activities
            through a responsive dashboard. The platform includes
            authentication, account management, transaction processing, OTP
            verification, and a structured backend API.
          </p>

          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>
              <span className="text-gray-400">
                React • Node.js • Express • MongoDB
              </span>
            </div>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://credixa.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/daniel689671/credixa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Project 1 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-10 items-start">
        <div className="bg-[#111] p-5 rounded-xl text-left shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Conceptual Work
          </span>
          <img
            src={allCountriesImg}
            alt="All Countries Project"
            className="rounded-lg w-full "
          />
        </div>
        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            REST Countries. All Countries
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Entire countries project
          </p>
          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>

              <span className="text-gray-400">React • Node • API</span>
            </div>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">Full-Stack..</span>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://all-countries-omega.vercel.app/"
              target="_blank"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/daniel689671/AllCountries"
              target="_blank"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-12 items-start mb-15">
        <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Full-Stack Project
          </span>

          <img
            src={growth}
            alt="Velocity Transit Logistics and Shipment Tracking Platform"
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            Velocity Transit
            <br />
            Logistics & Shipment Tracking Platform
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Velocity Transit is a full-stack logistics and shipment management
            platform designed to simplify the process of creating, managing, and
            tracking deliveries. The platform provides customers with shipment
            tracking and delivery updates, while administrators can manage
            shipments, monitor delivery operations, assign riders, and oversee
            logistics activities from a centralized dashboard. It combines a
            responsive user interface with backend APIs and database integration
            to create a structured workflow for managing shipments from creation
            through delivery.
          </p>

          <div className="mt-6">
            <h4 className="text-sm text-left text-gray-400 mb-2">
              PROJECT INFO
            </h4>

            <div className="border-t border-gray-700 py-3 flex justify-between gap-6">
              <span className="text-gray-300">Tech Stack</span>

              <span className="text-gray-400 text-right">
                React • Node.js • Express • MongoDB
              </span>
            </div>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>

              <span className="text-blue-500 font-medium">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://velocitytransit.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/daniel689671/velocity-transit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ================================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-[#111] p-5 rounded-xl text-left shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Conceptual Work
          </span>

          <img
            src={worknest}
            alt="WorkNest Job Search and Recruitment Platform"
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            WorkNest
            <br />
            Job Search & Recruitment Platform
          </h3>

          <p className="text-gray-300 leading-relaxed">
            WorkNest is a modern job-seeking platform designed to make the job
            search process easier, more organized, and more accessible. The
            platform allows job seekers to explore available opportunities,
            search and filter job listings, view detailed job information, and
            connect with relevant opportunities through a clean and responsive
            interface. It demonstrates how a full-stack application can combine
            intuitive frontend experiences with backend APIs to manage and
            deliver dynamic job-related data.
          </p>

          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>

            <div className="border-t border-gray-700 py-3 flex justify-between gap-6">
              <span className="text-gray-300">Tech Stack</span>

              <span className="text-gray-400 text-right">
                React • Node.js • Express • MongoDB
              </span>
            </div>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>

              <span className="text-green-500 font-medium">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://worknest-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/luisbalaguerofficialm-ops/work_nest_job.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-12 mb-10 items-start">
        <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Full-Stack Project
          </span>

          <img
            src={realEstateImg}
            alt="Beta House Real Estate Platform"
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            Beta House Real Estate Platform
          </h3>

          <p className="text-gray-300 leading-relaxed">
            A full-stack real estate platform that allows users to discover,
            search, and explore properties through a responsive and
            user-friendly interface. The platform provides property listings
            with detailed information, property images, locations, pricing, and
            other relevant details to help users find suitable properties. A
            backend API manages property data and supports communication between
            the frontend and database.
          </p>

          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>
              <span className="text-gray-400">
                React • Node.js • Express • MongoDB
              </span>
            </div>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://real-estate-omega-livid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/daniel689671/Real-Estates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================= */}

      {/* Project 3 */}
      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-12 mb-10 items-start">
        <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Conceptual Work
          </span>
          <img
            src={eCommerceImg}
            alt="E-Commerce Project"
            className="rounded-lg w-full"
          />
        </div>
        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">E-Commerce Store</h3>
          <p className="text-gray-300 leading-relaxed">
            Modern, responsive e-commerce with filtering, cart, checkout & API
            integration.
          </p>
          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>
              <span className="text-gray-400">React • Tailwind • Vite</span>
            </div>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">Full-Stack...</span>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://e-commerce-wheat-three.vercel.app/"
              target="_blank"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/daniel689671/-e-commerce"
              target="_blank"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* ======================== */}
      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-12  items-start">
        <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Conceptual Work
          </span>

          <img
            src={spaceImg}
            alt="Space Tourism Multi-page Website"
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            Space Tourism Multi-page Website
          </h3>

          <p className="text-gray-300 leading-relaxed">
            A modern, immersive space tourism website designed to showcase
            destinations, crew members, and spacecraft through a visually
            engaging multi-page experience. The project focuses on responsive
            design, intuitive navigation, reusable components, and creating an
            engaging user experience across different screen sizes.
          </p>

          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>
              <span className="text-gray-400">React • Tailwind CSS • Vite</span>
            </div>

            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">
                Frontend Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://space-tourism-teal-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/daniel689671/Space-tourism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 flex underline items-center gap-2 hover:text-lime-600"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <section className="w-full text-white py-24 px-6 md:px-16">
        {" "}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Title */}
          <div className="flex items-start">
            <h2 className="text-5xl md:text-6xl text-[#ffffff] font-extrabold tracking-tight">
              ABOUT ME
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6 max-w-xl text-left">
            <h3 className="">
              "Hello! I’m Daniel Chekwube, a passionate and dedicated Full Stack
              Developer with a growing expertise in Cybersecurity.", "Based in
              Lagos, Nigeria, I build secure and modern web solutions.",
            </h3>

            {/* <p className="text-green-600 leading-relaxed">
              My journey into tech began with a love for solving problems,
              building digital solutions, and understanding how systems work
              behind the scenes. Over time, that curiosity evolved into a deep
              commitment to creating applications that are functional, secure,
              efficient, and beautifully designed.
            </p> */}

            <p className="">
              I specialize in building modern web applications using
              technologies such as React, Node.js, Express, and MongoDB, with a
              strong focus on writing clean, scalable, and maintainable code. I
              enjoy transforming ideas into fully-developed digital products.
            </p>

            <p className="">
              Beyond development, I have strong foundational knowledge in
              cybersecurity, including secure coding principles, authentication
              flows, and threat awareness. Security isn’t just an add-on—it’s an
              essential part of how I build.
            </p>

            {/* <a
              href="#"
              className="text-lime-300 font-semibold underline underline-offset-4 hover:text-lime-400"
            >
              MORE ABOUT ME
            </a> */}

            {/* Buttons & Icons */}
            {/* <div className="flex items-center gap-4 mt-6">
              <button className="bg-lime-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-400 transition">
                More about me
              </button>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5 text-lime-300" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5 text-lime-300" />
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
