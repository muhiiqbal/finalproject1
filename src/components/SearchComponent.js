import React from "react";
import ButtonComponents from "./ButtonComponents";

const SearchComponent = ({ onClick, value, onChange, to,onKeyDown }) => {
  return (
    <form onClick={onClick} className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={onChange} to={to} onKeyDown={onKeyDown} />
      <ButtonComponents className={"btn btn-outline-success"} type={"submit"} text={"search"}  />
    </form>
  );
};

export default SearchComponent;
