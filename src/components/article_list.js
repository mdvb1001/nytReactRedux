import React from 'react';

const ArticleList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.articles.length}
    </ul>
    );
}

export default ArticleList;