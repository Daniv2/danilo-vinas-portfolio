import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Hero.css';
import dos from '../img/dos.jpeg';
import uno from '../img/uno.jpeg';
import tres from '../img/tres.jpeg';
import fourt from '../img/fourt.jpeg';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <section className="hero">
      <div className="image-container">
        <div className="image-wrapper">
          <img src={uno} alt="Uno" />
          <div className="image-title title-projects">projects.</div>
        </div>
        <div className="image-wrapper">
          <img src={dos} alt="Dos" />
          <div className="image-title title-about">about me.</div>
        </div>
        <div className="image-wrapper">
          <img src={tres} alt="Tres" />
          <div className="image-title title-contact">contact me.</div>
        </div>
        <div className="image-wrapper">
          <img src={fourt} alt="Fourt" />
          <div className="image-title title-blog">blog.</div>
        </div>
      </div>
      <div className="sections">
        <div className="section" id="projects">
          <h2>Projects</h2>
          <ImageSlider />
          <Link to="/projects" className="section-button">See All Projects</Link>
        </div>
        <div className="section" id="about">
          <h2>About Me</h2>
          <p>Learn more about my background and skills.</p>
          <Link to="/about" className="section-button">Read More</Link>
        </div>
        <div className="section" id="contact">
          <h2>Contact</h2>
          <p>Get in touch with me for opportunities and collaborations.</p>
          <Link to="/contact" className="section-button">Contact Me</Link>
        </div>
        <div className="section" id="design">
          <h2>Design</h2>
          <p>Explore my design projects and inspirations.</p>
          <Link to="/design" className="section-button">See Designs</Link>
        </div>
        <div className="section" id="develop">
          <h2>Develop</h2>
          <p>Discover my development work and technologies used.</p>
          <Link to="/develop" className="section-button">View Development</Link>
        </div>
        <div className="section" id="blog">
          <h2>Blog</h2>
          <p>Read my thoughts on web design and development.</p>
          <Link to="/blog" className="section-button">Read Blog</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
