import React from "react";

import classnames from 'classnames';

import title from "../../assets/img/Berlin-shorts-logo-White.svg";

import styles from '../../assets/styles/TitleSlide.module.scss';
import universal from '../../assets/styles/Universal.module.scss';

class TitleSlide extends React.Component {
  render() {
      return (
        <div className="Home">

          <div className="title-slide">

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
