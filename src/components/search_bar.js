import React, { Component } from 'react';
// It's like doing the following:
// const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const obj = {};
    obj[name] = event.target.value;
    this.props.onSearchTermChange(obj);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchFormSubmit();
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} className="search-bar">
       <input
        name="searchTerm"
        value={this.state.searchTerm}
        onChange={event => this.handleChange(event)} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;