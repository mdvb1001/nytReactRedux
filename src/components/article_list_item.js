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
            <div className="media-heading" >{headline}</div>
          </div>
        </div>
    </li>
  );
};

export default ArticleListItem;