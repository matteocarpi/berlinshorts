import React from "react";
import logo from '../../assets/img/Fox-logo.png';
import title from "../../assets/img/Berlin-shorts-logo-White.svg";
import date from "../../assets/img/OCTOBER-2019White.svg";

class TitleSlide extends React.Component {
  render() {
      return (
        <div className="Home">

          <div className="title-slide">

            <img className="logo-icon" src={logo} alt=""/>

            <div className="title">

              <img src={title} alt=""/>
              <img src={date} alt=""/>

            </div>

          </div>
        </div>
      )
    }
}

export default TitleSlide;
