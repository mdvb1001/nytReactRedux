import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ArticleList from './components/article_list';
import ArticleDetail from './components/article_detail';
const API_KEY = 'AIzaSyBa432OSP8pH4eu0QT8mXj_WBqQH89jp2o';




// create a new component that creates some HTML
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
// Take this component's generated HTML and show it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));