import React from "react";

const Book = ({ img, title, author }) => {
  // add attribute, eventHandler
  // onClick, onMouseOver
  // 1. as a reference
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  }; // clickehander() ends
  const complexExample = (author) => {
    console.log(author);
  }; // complexExample() ends
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  ); // return ends
}; // Book() ends

export default Book; // only one export default in a file
