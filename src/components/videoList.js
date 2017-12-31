import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

export default class VideoList extends Component {
  renderVideoList = (videos) => {
    return videos.map((video, i) => {
      return <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={this.props.onVideoSelect}
      />
    })
  };

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderVideoList(this.props.videos)}
      </ul>
    )
  }
}
