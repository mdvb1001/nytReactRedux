import React, { Component } from 'react';
// It's like doing the following:
// const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div>
       <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)} />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
    // Always use this the setState function to define state
  }
}

export default SearchBar;