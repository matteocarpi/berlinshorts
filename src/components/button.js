import React from "react";

class Button extends React.Component {
  render (props) {
    return (
      <a className={this.props.className} href={this.props.link}>{this.props.text}</a>
    )
  }
}
export default Button;
