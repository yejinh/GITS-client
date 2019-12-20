import React, { Component } from 'react';

export default class DisplayImage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.content !== nextProps.content;
  }

  render() {
    return (
      <span
        className="image"
        style={{ backgroundImage: `url(${URL.createObjectURL(this.props.content)}`}} />
    );
  }
}
