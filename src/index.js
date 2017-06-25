import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import ArticleList from './components/article_list';
import ArticleDetail from './components/article_detail';

const API_KEY = 'AIzaSyBa432OSP8pH4eu0QT8mXj_WBqQH89jp2o';

function getArticles (term) {
  // ajax request (promised based!!!)
  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
  "api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + term;
  return axios({
      method: "get",
      url:  queryUrl
  }).then(articles => {
      // this.setState({ articles });
      for (var i = 0; i < 10; i++) {
      console.log(articles.data.response.docs[i].web_url);
    }
  });
}

// create a new component that creates some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };

    getArticles('surf');

  }

  render() {
    return (
      <div>
        <SearchBar />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}
// Take this component's generated HTML and show it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));