import React from "react";

import classnames from 'classnames';

import logo from '../../assets/img/Fox-logo.png';
import title from "../../assets/img/Berlin-shorts-logo-White.svg";
import date from "../../assets/img/OCTOBER-2019White.svg";

import styles from '../../assets/styles/TitleSlide.module.scss';
import universal from '../../assets/styles/Universal.module.scss';

class TitleSlide extends React.Component {
  render() {
      return (
        <div className="Home">

          <div className="title-slide">

            <img className="logo-icon" src={logo} alt=""/>

            <div className="title">

              <img src={title} alt=""/>
              <span className={classnames(styles.date, universal.white)}>OCTOBER 2019</span>
            </div>

          </div>
        </div>
      )
    }
}

export default TitleSlide;
