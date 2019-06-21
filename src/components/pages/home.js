import React from 'react';
import home from '../../data/home.json'

class Home extends React.Component {
  render () {
      return (

        <div className="Home">

          <div className="title-slide">

            <img className="logo-icon" src="assets/img/Fox-logo.png" alt=""/>

            <div className="title">

              <img src="assets/img/Berlin-shorts-logo-White.svg" alt=""/>
              <img src="assets/img/OCTOBER-2019White.svg" alt=""/>

            </div>

          </div>

          <div className="intro">
            <h1 className="slogan">{home.slogan}</h1>
            <a className="button apply" href="#">Apply Now</a>
          </div>

          <div className="intermezzo-1">
          </div>

          <div className="mission">
          <h1 className="mission-title">What are We Looking For?</h1>
          <p className="mission">{home.mission}</p>
          <a className="button more-mission" href="#"></a>
          </div>

          <div className="intermezzo-2">
          </div>

          <div className="about">

          <h1 className="about-title">Who Are We?</h1>

          <div className="lilian">
            <h2 className="name">Lilian Sassanelli</h2>
            <p className="bio">{home.lilian}</p>
          </div>

          <div className="matteo">
            <h2 className="name">Matteo Carpi</h2>
            <p className="bio">{home.matteo}</p>
          </div>

          </div>
          <div className="contacts">
          <h1>Contacts</h1>
          <a href="mailto:{{ site.email }}"></a>
          </div>

        </div>

      )
  }
}

export default Home;
