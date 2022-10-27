import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponents from "../components/CardComponents";
import { fetchArticles } from "../redux/IndonesiaSlice";

const SearchPages = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.articles.error);
  const articleStatus = useSelector((state) => state.articles.status);
  const allArticles = useSelector((state) => state.articles.dataArticles);
  useEffect(() => {
    if (articleStatus === "idle") {
      dispatch(fetchArticles());
    }
  }, [articleStatus, dispatch]);

  let content;

  if (articleStatus === "loading") {
    content = (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  } else if (articleStatus === "succeeded") {
    // Sort posts in reverse chronological order by datetime string
    content = (
      <div className="row">
        <h1>Indonesia News</h1>
        <hr />
        {allArticles.map((article) => (
          // <div className="row" key={article.source.url}>
            <CardComponents name={article.source.name} title={article.title} description={article.description} article={article} href={article.url} target={'_blank'}  />
            
          // </div>
        ))}
        ;
      </div>
    );
  } else if (articleStatus === "failed") {
    content = <div>{error}</div>;
  }
  return <div>{content}</div>;
};



export default SearchPages;
