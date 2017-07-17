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
          </div>
          <div className="media-body">
            <div className="media-heading">
              <h6>{headline}</h6>
            </div>
          </div>
        </div>
    </li>
  );
};

export default ArticleListItem;