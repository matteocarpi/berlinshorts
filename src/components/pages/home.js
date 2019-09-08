import React from 'react';
import classnames from 'classnames';

import AnchorLink from "react-anchor-link-smooth-scroll";

import Concept from './concept';
import TitleSlide from '../sections/titleSlide.js';
import Button from "../button";
import CategoryList from '../categoryList';

import home from '../../data/home.json';
import logoVarco from "../../assets/img/LOGO-IL-VARCO.svg";
import camera from "../../assets/img/video-camera.svg";
import wolfskino from "../../assets/img/Wolf-kino.jpg"

import universal from '../../assets/styles/Universal.module.scss';
import styles from '../../assets/styles/Home.module.scss';

class Home extends React.Component {
  render () {
      return (
        <div className={styles.homepage}>
          <TitleSlide/>


          <section className={styles.intro}>
            <div>
              <img alt="video camera icon" src={camera} className="camera"/>
              <h1 className={styles.slogan}>{home.slogan}</h1>
            </div>

            <Button
              text= "Submit your Film"
              link= "/"
              className={classnames( universal.button, universal.apply )}
            />
          </section>

          <div className={classnames( styles.intermezzo1 )}>
          </div>

          <section className={styles.mission}>
            <h1 className={styles.missionTitle}>What are We Looking For?</h1>
            <p className={styles.mission}>{home.mission}</p>

            <h2>Categories</h2>

            <CategoryList />

            <AnchorLink
              href= "#concept"
              className={universal.button}
            >
              More about the concept
            </AnchorLink>
          </section>

          <div className={styles.intermezzo2}>
          </div>

          <Concept id='concept'/>

          <section
            id='location'
            className={styles.location}>
            <h1>A screen in the heart of Neukölln</h1>
            <p>{home.cinema}</p>
            <div className={styles.wolfskino}>
              <img className={styles.wolfskino} src={wolfskino} alt=""/>
            </div>

            <Button
              text="More About Wolfskino"
              link="https://wolfberlin.org/en/history"
              className={universal.button}
              target="_blank"
            />
          </section>

          <section id='about' className={styles.about}>

            <h1 className={styles.aboutTitle}>Who Are We?</h1>

            <div className={styles.varco}>
              <img alt="" className={styles.logoVarco} src={logoVarco} />
              <p>{home.varco}</p>
            </div>

            <section className={styles.people}>
              {home.people.map((person, index) => {
                return(
                  <article className={styles.person}>
                    <div className={styles.title}>
                      <img
                        className={styles.avatar}
                        src={person.avatar}/>
                      <h2>{person.name}</h2>
                      <span>{person.role}</span>
                    </div>
                    <p>
                      {person.bio}
                    </p>
                  </article>
                )
              })}
            </section>
          </section>
          <section className={styles.contacts}>
            <h1>Contacts</h1>
            <a href="mailto:{{ site.email }}">hello@berlinshorts.com</a>
            <a href="https://www.facebook.com"><i className="fas facebook-f"/></a>
          </section>


        </div>

      )
  }
}

export default Home;
