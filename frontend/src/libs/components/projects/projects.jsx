import React from 'react';

import Carousel from '../../react-bits/carousel/carousel';
import { FiCode } from "react-icons/fi";

const items = [
  {
    title: "AI Discord Bot",
    description: "I developed a Discord bot that integrates with the OpenAI API to enable natural language conversations and AI-generated image creation directly within Discord. The bot supports both text-based interactions using GPT models and image generation capabilities, allowing users to engage in intelligent conversation and request visuals based on prompts. Built with a focus on user experience and API integration, the project demonstrates my ability to work with external services, manage asynchronous communication, and deploy real-time tools in a live messaging environment. It also reflects my interest in conversational AI and generative technologies.",
    id: 1,
    icon: <FiCode className="carousel-icon" />,
  },
  {
    title: "Meal Planning App",
    description: "I built Recipe Manager, a cross-platform mobile application using React Native and Expo, designed to help users conveniently store, organize, and search through their personal recipes. The app features a clean and intuitive user interface that allows users to easily create new recipes, input ingredients and instructions, and manage their collection over time. I also implemented local storage to ensure persistent data management across sessions. This project showcases my skills in mobile development, UI design, and practical state management within a React Native environment.",
    id: 2,
    icon: <FiCode className="carousel-icon" />,
  },
  {
    title: "Senior Capstone Project",
    description: "Lead the implementation of a software controller for an autonomous high endurance UAV system. The goal of this project was to increase the endurance of an autonomous UAV by leveraging only software. I participated in the designing testing and tuning of a linear quadratic tracker controller through MATLAB and then converted that controller to C++ to be used on our UAV. We modelled the flight dynamics of the chosen UAV through MATLAB so the control system could be tested thoroughly without extra expenses on test aircrafts. The ending result increased the endurance marginally through only the control system but the overall goal of enhancing endurance through software was achieved.",
    id: 3,
    icon: <FiCode className="carousel-icon" />,
  },
  {
    title: "Undergraduate Research Assistant",
    description: "During my time as an undergraduate research assistant I helped develop a Unity based Mars rover simulator for use in testing stochastic resonance as a spaceflight coutnermeasure. My role on this project was to develop the procedural generation of the testing map. This map is created randomly to help ensure that the test subjects in this project cannot simply memorize the map to complete the tasks faster.",
    id: 4,
    icon: <FiCode className="carousel-icon" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>
        <div className="flex flex-row justify-center overflow-hidden position-relative">
          <div className="flex justify-center items-center">
            <Carousel
                items={items}
                baseHeight={500}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;