import React from 'react';

const ArticleDetail = (props) => {
  const article = props.article;

  return(
    <div className ="article-detail col-md-8">
      <div className="details">
        <div>{article.headline.main}</div>
        <div>{article.web_url}</div>
      </div>
    </div>
  );
};

export default ArticleDetail;