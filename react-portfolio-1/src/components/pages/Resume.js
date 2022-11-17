import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import thumbnail from '../../assets/resume.png';


export default function Resume() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">Resume</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="image" id="resume" src={thumbnail} alt="resume"></img>
              <p><a href="file:///Users/jayitachowdhury/Downloads/PDF%20Reader%20files/JayitaChowdhury_Resume.pdf" alt="open resume as PDF" target="_blank" rel="noreferrer"><button className="button" type="submit" value="Submit">Open resume (PDF)</button></a></p>
            </div>
            <div className="col-md-6"><h3>Technical Skills</h3>
            <div className="row">
              <div className="col-md-6">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
              </div>
              <div className="col-md-6">
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>MERN</li>
                <li>UI/UX</li>
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}