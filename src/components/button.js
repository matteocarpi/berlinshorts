import React from "react";
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render (props) {
    return (
      <Link className={this.props.className} target={this.props.target} to={this.props.link}>{this.props.text}</Link>
    )
  }
}
export default Button;
