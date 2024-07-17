import React, { useState } from 'react';
import './ArticlesList.css';

const ArticlesList = (props) => {
  const { initialTopArticles } = props;
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const handleArticleClick = (articleId) => {
    setSelectedArticleId(articleId);
    console.log(selectedArticleId,articleId);
  };

  return (
    <div className="articlelist">
      <ul>
        {initialTopArticles.map((article) => (
          <li key={article.id}>
            <div
              className="article-title"
              onClick={() => handleArticleClick(article.id)}
            >
              {article.title}
            </div>
            {selectedArticleId === article.id && (
              <div className="article-details">
                <h2>{article.title}</h2>
                <p>{article.abstract}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
