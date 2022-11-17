import React from 'react';
import '../../styles/style.css';
import Header from '../Header';
import Footer from '../Footer';
import portrait from '../../assets/potrait.jpeg';

export default function About() {
    return (
      <div>
        <Header />
        <div className="content">
          <h2 id="h2">About me</h2>
          <img className="image" src={portrait} alt="portrait" width="150"></img>
          <div className="bio">
          <p>
          My name is Jayita Chowdhury. I live in Phoenix, Arizona with my family.I love to cook food and travel all around the world.
          I love to learn new things. I am studying full stack web developer course from university of Arizona
          coding bootcamp. During the course we are learning creating beatiful, usable, professional websites using best practice accessibility and
          the latest W3 web standard guidelines resulting in semantic and seo friendly HTML and CSS.
          I design websites that convert visitors into customers and help your business grow. Given links to some of my websites to
          showcase my potential to fit for a given position. All the Websites linked below are designed, built
          according to latest web standards.
          <br/>
         </p>
         </div>
      </div>
      <Footer />
    </div>
  );
}