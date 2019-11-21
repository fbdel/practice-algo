import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"

//Debugging tool: throws errow when prop type is the wrong one (Array, Object, etc)
//Imported PropTypes then npm installed prop-types
//Created Libaray.propTypes method - Set Library Prop type to Array
//Created Book.propTypes method - Set Book Prop types to individual types


let bookList = [
  { title: "Hunger", author: "Roxane Gays", pages: 250 },
  { title: "The Sun Also..", author: "Ernest..", pages: 340 },
  { title: "White Teeth", author: "Zadie..", pages: 380 }
];



//Set Prop Types both for Library and Book
Library.propTypes = {
    //Throws and error of "book" prop is not an array - Debugging tool
    book : PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
};

ReactDOM.render(<Library books={bookList} />, document.getElementById("root"));
