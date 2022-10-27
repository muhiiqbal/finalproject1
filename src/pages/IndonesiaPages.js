// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponents from "../components/CardComponents";
import { fetchArticles } from "../redux/IndonesiaSlice";
import { addBookmark, updateBookmark } from "../redux/SavedSlice";

function IndonesiaPages() {
  const articleStatus = useSelector((state) => state.articles.status);
  const allArticles = useSelector((state) => state.articles.dataArticles);
  const error = useSelector((state) => state.articles.error);
  const dispatch = useDispatch();
  const { save } = useSelector((state) => state.save);

  console.log("save", save);

  const checkItem = (query) => {
    const found = save.some((el) => el.title === query.title);
    return found;
  };

  const saveHandler = (item) => {
    if (!checkItem(item)) {
      dispatch(addBookmark(item));
    } else {
      const updateNews = save.filter((el) => el.title !== item.title);
      dispatch(updateBookmark(updateNews));
    }
  };

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
          <CardComponents
            save={save}
            name={article.source.name}
            title={article.title}
            description={article.description}
            article={article}
            href={article.url}
            target={"_blank"}
            onClick={() => saveHandler(article)}
            children={
              save.some((el) => el.title === article.title)
                ? {
                    text: "Unsaved",
                    backgroundColor: "#6666ff",
                    textColor: "#fafafa",
                  }
                : {
                    text: "Save",
                  }
            }
          />

          // </div>
        ))}
        ;
      </div>
    );
  } else if (articleStatus === "failed") {
    content = <div>{error}</div>;
  }

  console.log("allArticles", articleStatus);
  console.log("allArticles", allArticles);

  return <div className="container mt-4">{content}</div>;
}

export default IndonesiaPages;
