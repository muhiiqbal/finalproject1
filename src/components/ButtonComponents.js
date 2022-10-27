import React from "react";

const ButtonComponents = ({ onClick,children, className, href, target, type, to }) => {
  
  return (
    
      <button className={className} onClick={onClick} href={href} target={target} type={type} to={to} >
        {children}
      </button>
    
  );
};

export default ButtonComponents;
