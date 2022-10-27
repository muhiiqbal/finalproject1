import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponents from "../components/CardComponents";
import { updateBookmark } from "../redux/SavedSlice";

const SavedPages = () => {
  const dispatch = useDispatch();
  const { save } = useSelector((state) => state.save);

  const deleteHandler = (item) => {
    const updateNews = save.filter((el) => el.title !== item.title);
    dispatch(updateBookmark(updateNews));
  };

  return (
    <div className="container">
      <div className=" row">
        <h1>Saved Pages</h1>
        <hr />
        {save.map((item) => (
          <CardComponents
            name={item.source.name}
            title={item.title}
            description={item.description}
            item={item}
            href={item.url}
            target={"_blank"}
            onClick={() => deleteHandler(item)}
            children={
              save.some((el) => el.title === item.title)
                ? {
                    children: "Unsaved",
                    backgroundColor: "#6666ff",
                    textColor: "#fafafa",
                  }
                : {
                    children: "Save",
                  }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SavedPages;
