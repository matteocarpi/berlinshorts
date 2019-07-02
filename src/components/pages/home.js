import React from 'react';
import home from '../../data/home.json';
import '../../assets/styles/styles.scss';
import TitleSlide from '../sections/titleSlide.js';
import Button from "../button";
import logoVarco from "../../assets/img/LOGO-IL-VARCO.svg";
import camera from "../../assets/img/video-camera.svg";
import wolfskino from "../../assets/img/Wolf-kino.jpg"

class Home extends React.Component {
  render () {
      return (
        <div className="home-page">
        <TitleSlide/>


          <section className="intro">
            <div>
              <img alt="" src={camera} className="camera"/>
              <h1 className="slogan">{home.slogan}</h1>
            </div>

            <Button
              text= "Submit your Film"
              link= "/"
              className="button apply"
            />
          </section>

          <div className="intermezzo-1">
          </div>

          <section className="mission">
            <h1 className="mission-title">What are We Looking For?</h1>
            <p className="mission">{home.mission}</p>
          </section>

          <div className="intermezzo-2">
          </div>

          <section className="location">
            <h1>A screen in the heart of Neukölln</h1>
            <div lassName="wolfskino">
              <img className="wolfskino" src={wolfskino} alt=""/>
            </div>
          </section>

          <section className="about">

            <h1 className="about-title">Who Are We?</h1>

            <div className="varco">
              <img alt="" className="logo-varco" src={logoVarco} />
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
          </section>
          <section className="contacts">
            <h1>Contacts</h1>
            <a href="mailto:{{ site.email }}">hello@berlinshorts.com</a>
            <a href="https://www.facebook.com"><i className="fas facebook-f"/></a>
          </section>


        </div>

      )
  }
}

export default Home;
