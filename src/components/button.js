import React from "react";
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render (props) {
      return (
        this.props.target === "_blank" ?

        <a
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={this.props.className}
        >
          {this.props.text}
        </a>

        :

        <Link className={this.props.className} target={this.props.target} to={this.props.link}>{this.props.text}
        </Link>

      )
  }
}
export default Button;
