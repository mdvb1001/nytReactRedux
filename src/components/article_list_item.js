import React from 'react';

const ArticleListItem = (props) => {
  const article = props.article;
  const onArticleSelect = props.onArticleSelect;

  // console.log(article.web_url);

  const newsSource = article.source;
  const headline = article.headline.main;
  const articleURL = article.web_url; // to be included later

  return (
    <li onClick={() => onArticleSelect(article)} className="list-group-item">
        <div className="article-list media">
          <div className="media-left">
            <div className="media-object">{newsSource}</div>
          </div>
          <div className="media-body">
           {/*
            Use this as the an example of implementing the URL as a Headline...
           <h4><a target="_blank" href={this.props.article.web_url}>{this.props.article.headline.main}</a></h4>*/}
            <div className="media-heading" >{headline}</div>
          </div>
        </div>
    </li>
  );
};

export default ArticleListItem;