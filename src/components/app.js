import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import { youtubeAPI } from '../helpers';
import { YOUTUBE_API_KEY } from '../constants';

export default class App extends Component {
  constructor() {
    super(...arguments);

    this.state = { videos: [], selectedVideo: null }
    this.videoSearch('surfboards');
  }

  videoSearch = _.debounce((term) => {
    youtubeAPI(
      { key: YOUTUBE_API_KEY, q: term },
      videos => this.setState({ videos, selectedVideo: videos[0] })
    );
  }, 500)

  handleVideoSelect = selectedVideo => this.setState({ selectedVideo })

  render() {
    return (
      <div>
        <SearchBar onVideoSearch={this.videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect}/>
      </div>
    );
  }
}
