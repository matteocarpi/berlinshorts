import React from "react";

class Button extends React.Component {
  render (props) {
    return (
      <a className={this.props.className} target={this.props.target} href={this.props.link}>{this.props.text}</a>
    )
  }
}
export default Button;
