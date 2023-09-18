import React from "react";

// function FunctionalComponent(props) {
//   return <h1>Hello From {props.name}</h1>;
// }

const FunctionalComponent = (props) => {
  return (
    <div>
      <h1>Hello From {props.name}</h1>
      {props.children}
    </div>
  );
};

export default FunctionalComponent;
