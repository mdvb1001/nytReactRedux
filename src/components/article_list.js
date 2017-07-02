import React from 'react';
import ArticleListItem from './article_list_item';

const ArticleList = (props) => {

  const articleItems = props.articles.map((article) => {
    return <ArticleListItem
      onArticleSelect={props.onArticleSelect}
      key={article._id}
      article={article} />
  });

  return (
    <div className="list-group">
      {articleItems}
    </div>
  );
};

export default ArticleList;