import React, { Component } from 'react';

export default class VideoListItem extends Component {
  _onVideoSelect = () => {
    const { video, onVideoSelect } = this.props;
    onVideoSelect(video);
  }

  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <li className="list-group-item" onClick={this._onVideoSelect}>
        <div className="video-list media">

          <div className="media-left">
            <img className="media-object" src={video.snippet.thumbnails.default.url}/>
          </div>

          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}
