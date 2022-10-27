import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../redux/CovidSlice";
import CardComponents from "../components/CardComponents";
import { addBookmark, updateBookmark } from "../redux/SavedSlice";

function CovidPages() {
  const articleStatus = useSelector((state) => state.covid.status);
  const allArticles = useSelector((state) => state.covid.dataCovid);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.articles.error);
  const { save } = useSelector((state) => state.save);

  useEffect(() => {
    if (articleStatus === "idle") {
      dispatch(fetchArticles());
    }
  }, [articleStatus, dispatch]);

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
      <div className="container mt-4">
        <h1>Covid-19 News</h1>
        <hr />
        <div className="row">
          {allArticles
            .filter((covid) => covid.publishedAt < "2022-10-20")
            .map((covid) => (
              <CardComponents name={covid.source.name} title={covid.title} description={covid.description} href={covid.url} target={"_blank"} onClick={() => saveHandler(covid)} />
            ))}
          ;
        </div>
      </div>
    );
  } else if (articleStatus === "failed") {
    content = <div>{error}</div>;
  }

  console.log("allArticles", articleStatus);
  console.log("allArticles", allArticles);

  return <div className="container mt-4">{content}</div>;
}

export default CovidPages;
