import React from "react";
import ReactDOM from "react-dom";

// css
import "./index.css";
// setup vars

import { books } from "./books"; // relative path

import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  ); // return() ends
} // BookList() ends

ReactDOM.render(<BookList />, document.getElementById("root"));
