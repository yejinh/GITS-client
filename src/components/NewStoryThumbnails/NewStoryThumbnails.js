import React, { Component } from 'react';
import DisplayImage from '../DisplayImage/DisplayImage';
import { StyledNewStoryThumbnails } from './NewStoryThumbnils.styled';

export default class NewStoryThumbnails extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.newStoryPages !== nextProps.newStoryPages;
  }

  render() {
    return (
      <StyledNewStoryThumbnails>
        <div>THUMBNAILS</div>
        {this.props.newStoryPages.map(page => (
          <div
            key={page.texts}
            className="thumbnail">
            <DisplayImage content={page.contents[0]} />
            <DisplayImage content={page.contents[1]} />
          </div>
        ))}
      </StyledNewStoryThumbnails>
    );
  }
}
