import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Hero.css';  // General styles for Hero
import ImageSlider from './ImageSlider';
import dos from '../img/dos.jpeg';
import uno from '../img/uno.jpeg';
import tres from '../img/tres.jpeg';
import fourt from '../img/fourt.jpeg';

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
        <div className="section section-projects" id="projects">
          <h2 className="section-title-projects">Projects</h2>
          <ImageSlider />
          <Link to="/projects" className="section-button-projects">See All Projects</Link>
        </div>
        <div className="section section-about" id="about">
          <h2 className="section-title-about">About Me</h2>
          <p>Learn more about my background and skills.</p>
          <Link to="/about" className="section-button-about">Read More</Link>
        </div>
        <div className="section section-contact" id="contact">
          <h2 className="section-title-contact">Contact</h2>
          <p>Get in touch with me for opportunities and collaborations.</p>
          <Link to="/contact" className="section-button-contact">Contact Me</Link>
        </div>
        <div className="section section-design" id="design">
          <h2 className="section-title-design">Design</h2>
          <p>Explore my design projects and inspirations.</p>
          <Link to="/design" className="section-button-design">See Designs</Link>
        </div>
        <div className="section section-develop" id="develop">
          <h2 className="section-title-develop">Develop</h2>
          <p>Discover my development work and technologies used.</p>
          <Link to="/develop" className="section-button-develop">View Development</Link>
        </div>
        <div className="section section-blog" id="blog">
          <h2 className="section-title-blog">Blog</h2>
          <p>Read my thoughts on web design and development.</p>
          <Link to="/blog" className="section-button-blog">Read Blog</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
