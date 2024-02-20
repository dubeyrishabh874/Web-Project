import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection />;
};

export default About;

// import React from "react";
// import HeroSection from "./components/HeroSection";

// const About = () => {
//   const data = {
//     name: "Technical RAM",
//     img: "https://www.airswift.com/hubfs/employee%20training%20and%20development.png",
//   };
//   return <HeroSection {...data} />;
// };

// export default About;
