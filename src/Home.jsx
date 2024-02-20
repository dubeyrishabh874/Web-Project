import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import { Contact } from "./Contact";
import Carousel from "./components/Carousel";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  const data = {
    name: "TECHNICAL SOFTENGI",
    img: "https://t3.ftcdn.net/jpg/03/64/90/68/360_F_364906832_3CWsp5oXzh8oauRKz7SYtPfCZ57JfESZ.jpg",
  };

  const images = [
    { src: "https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-two-hourglasses-of-the-same-size-with-sand-in-the-middle-image_2608257.jpg", alt: "1" },
    { src: "https://png.pngtree.com/thumb_back/fw800/back_pic/03/76/26/0757be8daf9989f.jpg", alt: "2" },
    { src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/digital-global-connection-network-technology-background-design-marvin-solorzano.jpg", alt: "3" },
    { src: "https://t4.ftcdn.net/jpg/02/34/44/19/360_F_234441954_UBLcJTnihXXonXiR0kvToWLAm4OeoL89.jpg", alt: "4" },
    // ...
  ];

  return (
    <>
      <Carousel images={images} effect="fade"/>
      <HeroSection />
      {/* <HeroSection {...data} /> */}
      {/* <Services />
      <Contact /> */}
    </>
  );
};

export default Home;
