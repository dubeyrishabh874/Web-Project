import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { AppContext, useGlobalContext } from "../context";

const HeroSection = () => {
  // const HeroSection = ({ name, img }) => {
  //   const { firstName, age } = useContext(AppContext);

  const { name, img } = useGlobalContext();

  console.log("About", name, img, useGlobalContext());

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Hi I'm {name},A Software Engineer React/React Native at Innoright
            Solutions and freelancer. I’m skilled with React & React Native,
            Next.js, Redux, TypeScript, HTML, CSS, JavaScript and more..
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={img} alt="Hero Image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  text-wrap: wrap;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color ${({ theme }) => theme.colors.helper}
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 50rem;
  }
  .section-hero-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  picture{
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) { 
    .grid {
      gap: 7.2rem;
    }
    .hero-heading { 
      font-size: 5.1rem;
    }
  }
`;

export default HeroSection;
