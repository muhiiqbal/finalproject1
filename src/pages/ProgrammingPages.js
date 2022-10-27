import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../redux/ProgrammingSlice";
import CardComponents from "../components/CardComponents";
import { addBookmark, updateBookmark } from "../redux/SavedSlice";

const ProgrammingPages = () => {
  const articleStatus = useSelector((state) => state.programming.status);
  const allArticles = useSelector((state) => state.programming.articlesProgramming);
  const error = useSelector((state) => state.programming.error);
  const dispatch = useDispatch();
  const { save } = useSelector((state) => state.save);

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
    content = (
      <div className="row">
        <h1>Programming News</h1>
        <hr />
        {allArticles
          .filter((programming) => programming.publishedAt > "2022-09-20")
          .map((programming) => (
            <CardComponents name={programming.source.name} title={programming.title} description={programming.description} href={programming.url} target={"_blank"} onClick={() => saveHandler(programming)} />
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
};

export default ProgrammingPages;
