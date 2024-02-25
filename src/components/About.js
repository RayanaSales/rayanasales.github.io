// About.js
import React from "react";
import "../assets/styles/About.css";
import "../assets/styles/Global.css";
import ProfileImage from "../assets/images/Rayana_Sales_PIC.jpeg";
import ButtonWithGradientBorder from "./ButtonWithGradientBorder";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-profile">
          <img src={ProfileImage} alt="Rayana Sales" className="about-photo" />
          <div className="about-below-photo">
            <h2 className="rainbow-text">RAYANA SALES</h2>
            <p>Full-Stack Software Developer</p>
            <p>Focused in Front-End</p>
            <ButtonWithGradientBorder
              link={"https://www.linkedin.com/in/rayana-sales/"}
              text={"LinkedIn"}
            />
            <ButtonWithGradientBorder
              link={"https://github.com/RayanaSales"}
              text={"GitHub"}
            />
          </div>
        </div>
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            Hello, World! 👋🌍 I'm Rayana Sales, a passionate software developer
            and tech enthusiast. With over 8 years of experience in the field,
            I've had the opportunity to work on various exciting projects and
            explore different technologies.
          </p>
          <h3>Education</h3>
          <p>
            I hold a degree in Systems Analysis and Development <br />
            Provided by Instituto Federal de Pernambuco <br />
            2014 - 2017
          </p>
          <h3>Languages</h3>
          <p>
            English: Full professional proficiency
            <br />
            Portuguese: Native
          </p>
          <h3>What am I looking for going forward?</h3>
          <p>
            I’m looking to engage in multicultural environments as I want to
            continue facing challenges related to management and coordination in
            an international context, in addition to contributing to solutions
            that have a significant impact on a global scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;