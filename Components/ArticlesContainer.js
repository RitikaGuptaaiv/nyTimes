
import React, { useEffect, useState } from 'react';
import ArticleList from './ArticlesList';
import Shimmer from './Shimmer';

const ArticlesContainer = () => {
  const [initialTopArticles, setInitialTopArticles] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=kRTHWAYNPUGGse7yTxkmITQCgPtOI8Ce'
    );
    const json = await data.json();
    setInitialTopArticles(json.results);
    // console.log(json);
  };
  if(initialTopArticles.length===0){
    return <Shimmer/>;
  }
  return (
    <div className='body'>
        <ArticleList initialTopArticles={initialTopArticles}/>
    </div>
  );
};

export default ArticlesContainer;
