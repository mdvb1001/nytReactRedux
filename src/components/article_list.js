import React from 'react';
import ArticleListItem from './article_list_item';

const ArticleList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.articles.map(function(art) {return '<div>' + art + '</div>'}) }
    </ul>
  );
};

export default ArticleList;