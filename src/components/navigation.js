import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';

import navigation from '../data/navigation.json';

import logo from '../assets/img/Fox-logo.png';

import styles from '../assets/styles/Navigation.module.scss';

class Navigation extends React.Component {

  render() {

    const position = this.props.location.pathname;

    return (

      <header>
        <nav className={classnames(styles.mobile, position === "/" ? styles.transparent : styles.solid )}>
          <img className={styles.logo} src={logo} alt=""/>
          <ul>
            {navigation.map((item, index) => {
              return (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <nav className={classnames(styles.desktop, position === "/" ? styles.transparent : styles.solid )}>
          <ul>
            <li>
              <Link to={navigation[0].link}>{navigation[0].name}</Link>
            </li>
            <li>
              <img className={styles.logo} src={logo} alt=""/>
            </li>
            <li>
              <Link to={navigation[1].link}>{navigation[1].name}</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Navigation);
