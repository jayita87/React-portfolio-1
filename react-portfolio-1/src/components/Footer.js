import React from 'react';
import '../styles/style.css';
import gthblogo from '../assets/github.png';
import lilogo from '../assets/linkedin.png';
import gmaillogo from '../assets/gmail.png';
export default function Footer() {
    return (
      <div className="footer">
        <a href="https://github.com/jayita87" alt="Link to GitHub account"><img className="icon" src={gthblogo} alt="Link to GitHub account" width="64"></img></a>
        <a href="https://www.linkedin.com/in/jayita-chowdhury-68a31917a/" alt="Link to LinkedIn"><img className="icon" src={lilogo} alt="LinkedIn account" width="64"></img></a>
        <a href="mailto:jayita.chowdhury.1987@gmail.com" alt="Link to email"><img className="icon" src={elogo} alt="Email me" width="64"></img></a>
        </div>
    );
  }
