import ButtonComponents from "./ButtonComponents";
import React from "react";

const CardComponents = ({article,save, saveButtonStyle,text, name, title, description, href, target, onClick }) => {
  // console.log('article',article);
  return (
    <div className="container mt-4 col-sm-4">
      {/* card */}
      <div className="cardku">
        <div className="card text-start">
          <div className="card-body">
            <h6 style={{ color: "grey" }}>{name}</h6>
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <a href={href} target={target}>
              <ButtonComponents children={ "News Page" } className={"btn btn-primary"} />
            </a>
            <ButtonComponents className={"btn btn-success ms-2"} onClick={onClick} children={'save'} />
          </div>
        </div>
      </div>
      {/* card */}
    </div>
  );
};

export default CardComponents;
