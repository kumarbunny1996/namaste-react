import React from "react";
import ReactDOM from "react-dom/client";

// creates the react element returns the object
const heading = React.createElement(
  "h1", //tag
  { id: "heading", abc: "abc" }, // attributes to the tag
  "hello react" //children
);

// for creating nested element in core react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "i am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "i am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "i am h2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // object
