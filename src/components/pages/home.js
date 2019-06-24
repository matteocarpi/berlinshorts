import React from 'react';
import home from '../../data/home.json';
import '../../assets/styles/styles.scss';
import TitleSlide from '../sections/titleSlide.js';
import Button from "../button";
import logoVarco from "../../assets/img/LOGO-IL-VARCO.svg"

class Home extends React.Component {
  render () {
      return (
        <div className="home-page">
        <TitleSlide/>


          <div className="intro">
            <h1 className="slogan">{home.slogan}</h1>
            <Button
              text= "Submit your Film"
              link= "/"
              className="button apply"
            />
          </div>

          <div className="intermezzo-1">
          </div>

          <div className="mission">
          <h1 className="mission-title">What are We Looking For?</h1>
          <p className="mission">{home.mission}</p>
          </div>

          <div className="intermezzo-2">
          </div>

          <div className="location">
            <h1>A screen in the heart of Neukölln</h1>
            <div className="wolfskino">
              <h2>Logo di Wolfskino con foto</h2>
            </div>
          </div>

          <div className="about">

            <h1 className="about-title">Who Are We?</h1>

            <div className="varco">
              <img className="logo-varco" src={logoVarco} />
              <p>{home.varco}</p>
            </div>
            {/*
            <div className="lilian">
              <h2 className="name">Lilian Sassanelli</h2>
              <p className="bio">{home.lilian}</p>
            </div>

            <div className="matteo">
              <h2 className="name">Matteo Carpi</h2>
              <p className="bio">{home.matteo}</p>
            </div>
            */}
          </div>
          <div className="contacts">
            <h1>Contacts</h1>
            <a href="mailto:{{ site.email }}">hello@berlinshorts.com</a>
            <a href="https://www.facebook.com"><i className="fas facebook-f"/></a>
          </div>


        </div>

      )
  }
}

export default Home;
