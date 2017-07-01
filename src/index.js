import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import ArticleList from './components/article_list';
import ArticleDetail from './components/article_detail';

// create a new component that creates some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      selectedArticle: null
      };

    const term = 'surfboards';

    this.getArticles(term);

  }

  getArticles (term) {
    // ajax request (promised based!!!)
    const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
    "api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + term;
    return axios({
        method: "get",
        url:  queryUrl
    }).then(results => {
        // for (var i = 0; i < 10; i++) {
        //   console.log(results.data.response.docs[i].web_url);
        // }
        const articles  = results.data.response.docs.map(article => {
          return article
        });
        this.setState({
          articles: articles,
          selectedArticle: articles[0]
        });
    });
}


  render() {
    return (
      <div>
        <SearchBar />
        <ArticleDetail article={this.state.selectedArticle} />
        <ArticleList
          onArticleSelect={selectedArticle => this.setState({selectedArticle}) }
          articles={this.state.articles} />
      </div>
    );
  }
}
// Take this component's generated HTML and show it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));