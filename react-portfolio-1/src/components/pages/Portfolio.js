import React from 'react';
import '../../styles/style.css';
import Footer from '../Footer';
import Header from '../Header';
import Project from '../Project';

import profile1 from '../../assets/chef_Hat.png';
import profile2 from '../../assets/cryptoinfo.png';
import profile3 from '../../assets/notetaker.png';
import profile4 from '../../assets/weatherapp.png';
import profile5 from '../../assets/techblog.png';
import profile6 from '../../assets/workdaysch.png';

export default function Portfolio() {
    return (
      <div>
        <Header />
        <div className="content">
          <h2 id="h2">Portfolio</h2>
          <div className="container" style={{paddingTop: '12px'}}>
            <div className="row">
              <Project
                key = "1"
                img = {profile1}  
                imgAlt = "The Chef's Hat"
                project = "https://fathomless-oasis-00735.herokuapp.com/"
                projectAlt = "Restaurants app"
                projectTitle = "The Chef's Hat"
                gitHubRepo = "https://github.com/Jalenarms1/the-chefs-hat"
                gitHubAlt = "GitHub link"
                description = "Build with MySQL, Express, Node, Handlebars, deployed on Heroku" />
              <Project
                key = "2"
                img = {profile2}  
                imgAlt = "Crypto info"
                project = "https://kieferjackson.github.io/crypto-info/"
                projectAlt = "Crypto currency app"
                projectTitle = "Crypto info"
                gitHubRepo = "https://github.com/kieferjackson/crypto-info"
                gitHubAlt = "GitHub link"
                description = "Built with HTML, Javascript, CSS, JQuery, Bulma and two APIs" />
            </div> 
            <div className="row">
              <Project
                key = "3"
                img = {profile3}  
                imgAlt = "Note Taker"
                project = "https://note-taker2-heroku.herokuapp.com/"
                projectAlt = "Note Taker app "
                projectTitle = "Note Taker"
                gitHubRepo = "https://github.com/jayita87/Note-Taker"
                gitHubAlt = "GitHub link"
                description = "This app build with Node.js, Express.js, Bootstrap 5, CSS, HTML, Restful API, deployed on Heroku" />
              <Project
                key = "4"
                img = {profile4}  
                imgAlt = "Weather Dashboard"
                project = "https://jayita87.github.io/Weather-dashboard/"
                projectAlt = "five-day forecast for any selected city"
                projectTitle = "Weather Dashboard"
                gitHubRepo = "https://github.com/jayita87/Weather-dashboard"
                gitHubAlt = "GitHub link"
                description = "This weather app built with HTML, moment.js, JQuery, Bulma and third party API" />
            </div> 
            <div className="row">
              <Project
                key = "5"
                img = {profile5}  
                imgAlt = "Tech Blog"
                project = "https://tech-blog-100.herokuapp.com/"
                projectAlt = "Tech Blog"
                projectTitle = "Tech Blog"
                gitHubRepo = "https://github.com/jayita87/Tech-Blog-2"
                gitHubAlt = "GitHub link"
                description = "Build with Express, Sequelize, JavaScript, Bcrypt, MySQL, Handlebars.js, MVC, Node.js, API routes and deployed on Heroku" />
              <Project
                key = "6"
                img = {profile6}  
                imgAlt = "work-day-scheduler"
                project = "https://jayita87.github.io/work-day-scheduler/"
                projectAlt = "work-day-scheduler"
                projectTitle = "Work-Day-Scheduler"
                gitHubRepo = "https://github.com/jayita87/work-day-scheduler"
                gitHubAlt = "GitHub link"
                description = "Build with JavaScript, HTML, CSS, JQuery" />
            </div> 
          </div>
        </div>
      <Footer />
      </div>
    );
  }