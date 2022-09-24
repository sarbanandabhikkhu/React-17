import React from "react";
import Title from "./Title";
import Details from "./Details";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <Title title={this.props.title} />
        <Details details={this.props.details} />
      </div>
    );
  }
}

export default Header;
