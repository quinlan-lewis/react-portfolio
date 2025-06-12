import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";

import SpotlightCard from "../spotlightCard/spotlightCard";

import "./carousel.css";

const DEFAULT_ITEMS = [
  {
    title: "AI Discord Bot",
    description: "I developed a Discord bot that integrates with the OpenAI API to enable natural language conversations and AI-generated image creation directly within Discord. The bot supports both text-based interactions using GPT models and image generation capabilities, allowing users to engage in intelligent conversation and request visuals based on prompts. Built with a focus on user experience and API integration, the project demonstrates my ability to work with external services, manage asynchronous communication, and deploy real-time tools in a live messaging environment. It also reflects my interest in conversational AI and generative technologies.",
    id: 1,
    icon: <FiFileText className="carousel-icon" />,
  },
  {
    title: "Meal Planning App",
    description: "I built Recipe Manager, a cross-platform mobile application using React Native and Expo, designed to help users conveniently store, organize, and search through their personal recipes. The app features a clean and intuitive user interface that allows users to easily create new recipes, input ingredients and instructions, and manage their collection over time. I also implemented local storage to ensure persistent data management across sessions. This project showcases my skills in mobile development, UI design, and practical state management within a React Native environment.",
    id: 2,
    icon: <FiCircle className="carousel-icon" />,
  },
  {
    title: "Senior Capstone Project",
    description: "Lead the implementation of a software controller for an autonomous high endurance UAV system. The goal of this project was to increase the endurance of an autonomous UAV by leveraging only software. I participated in the designing testing and tuning of a linear quadratic tracker controller through MATLAB and then converted that controller to C++ to be used on our UAV. We modelled the flight dynamics of the chosen UAV through MATLAB so the control system could be tested thoroughly without extra expenses on test aircrafts. The ending result increased the endurance marginally through only the control system but the overall goal of enhancing endurance through software was achieved.",
    id: 3,
    icon: <FiLayers className="carousel-icon" />,
  },
  {
    title: "Undergraduate Research Assistant",
    description: "During my time as an undergraduate research assistant I helped develop a Unity based Mars rover simulator for use in testing stochastic resonance as a spaceflight coutnermeasure. My role on this project was to develop the procedural generation of the testing map. This map is created randomly to help ensure that the test subjects in this project cannot simply memorize the map to complete the tasks faster.",
    id: 4,
    icon: <FiLayout className="carousel-icon" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  baseHeight = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  var effectiveBaseWidth
  if (window.innerWidth > 800) {
    effectiveBaseWidth = 800
  } else {
    effectiveBaseWidth = window.innerWidth * 0.9;
  }
  const effectiveBaseHeight = baseHeight || Math.min(windowSize.height * 0.6);
  const containerPadding = 16;
  const itemWidth = effectiveBaseWidth - containerPadding * 2;
  const itemHeight = effectiveBaseHeight - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: `${effectiveBaseWidth}px`,
        height: `${effectiveBaseHeight}px + 10px`,
        ...(round && { borderRadius: "50%" }),
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          height: itemHeight,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? "round" : ""}`}
              style={{
                width: itemWidth,
                height: itemHeight,
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <SpotlightCard className="custom-spotlight-card" style={{
                height: itemHeight,
              }} spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className={`carousel-item-header ${round ? "round" : ""}`}>
                  <div className="carousel-item-title">
                    <span className="carousel-icon-container">
                      {item.icon}
                    </span>
                    {item.title}
                  </div>
                </div>
                <div className="carousel-item-content">
                  <p className="carousel-item-description">{item.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? "active" : "inactive"
                }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
