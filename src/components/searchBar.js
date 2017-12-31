import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super(...arguments);

    this.state = { input: '' }
  }

  onInputChange = event => {
    const { onVideoSearch } = this.props;
    this.setState({ input: event.target.value });
    onVideoSearch(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.input}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}
