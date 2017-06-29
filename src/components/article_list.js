import React from 'react';
import ArticleListItem from './article_list_item';




const ArticleList = (props) => {
  const articleItems = props.articles.map((article) => {
    return <ArticleListItem article={article} />
  });

  return (
    <ul className="col-md-4 list-group">
      {articleItems}
    </ul>
  );
};

export default ArticleList;