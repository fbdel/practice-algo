import React from "react";

const Book = ({
  title = "No Title Provied ",
  author = "No Author",
  pages = 0,
  freeBookmark
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Pages: {pages} pages </p>
      <p> Freee Bookmark: {freeBookmark ? "yes" : "no"}</p>
    </section>
  );
};

export default Book;
