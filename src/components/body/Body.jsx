import React from "react";
import "./Body.css";
import About from "./About/about";
import Projects from "./Projects/Projects";
import Skills from "./Skills/skill";
import Work from "./Work/work";
import Contact from "./Contacts/contact";

const Body = () => {
  return (
    <>
      <div className="body">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Body;
