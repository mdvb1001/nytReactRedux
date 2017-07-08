import React from 'react';

const ArticleDetail = (props) => {

  const article = props.article;

  if (!article) {
    return <div>Loading...</div>;
  }

  return(
    <div className ="article-detail">
      <div className="details">
        <div>
          <h4>
            <a href={article.web_url} target="_blank">{article.headline.main}</a>
          </h4>
        </div>
        <br />
        <div>{article.snippet}</div>
        <br />
        <div>{article.pub_date}</div>
        <br />
        <div>{article.source}</div>
      </div>
    </div>
  );
};

export default ArticleDetail;