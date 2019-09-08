import React from "react";
import { withRouter } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";

import classnames from "classnames";

import navigation from "../data/navigation.json";

import logo from "../assets/img/Fox-logo.png";

import styles from "../assets/styles/Navigation.module.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isPageScrolled: false
    };
  }

  listenScrollEvent = e => {
    window.scrollY > 580
      ? this.setState({ isPageScrolled: true })
      : this.setState({ isPageScrolled: false });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  handleMenuButtonClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen, isPageScrolled } = this.state;
    const position = this.props.location.pathname;

    const navigationElems = navigation.map(item => (
      <li>
        <Link smooth to={item.link}>
          {item.name}
        </Link>
      </li>
    ));

    navigationElems.splice(
      Math.round(navigation.length / 2),
      0,
      <li>
        <img className={styles.logo} src={logo} alt="icon of a fox" />
      </li>
    );

    return (
      <header>
        <nav
          className={classnames(
            styles.mobile,
            position === "/" ? styles.transparent : styles.solid,
            isMenuOpen ? styles.opened : styles.closed, isPageScrolled ? styles.fixed : styles.normal
          )}
        >
          <div
            className={styles.menuButton}
            onClick={this.handleMenuButtonClick}
          >
            <i class="fas fa-bars" />
          </div>

          <img className={styles.logo} src={logo} alt="" />
          <ul>
            {navigation.map((item, index) => {
              return (
                <li key={item.name}>
                  <Link smooth onClick={this.closeMenu} to={item.link}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className={classnames(styles.desktop, styles.transparent)}>
          <ul>
            {navigationElems.map((item, index) => {
              return item;
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Navigation);
