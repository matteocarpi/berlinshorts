import React from "react";

import classnames from 'classnames';

import title from "../../assets/img/Berlin-Shorts-logo.svg";

import styles from '../../assets/styles/TitleSlide.module.scss';
import universal from '../../assets/styles/Universal.module.scss';

class TitleSlide extends React.Component {
  render() {
      return (
        <div className={styles.Home}>

          <div className={styles.titleSlide}>

            <div className={styles.title}>

              <img src={title} alt=""/>
              <span className={classnames(styles.date, universal.white)}>March 2020</span>
            </div>
          </div>
        </div>
      )
    }
}

export default TitleSlide;
