import React from "react";
import ReactDOM from "react-dom";

import Library from "./Library";
//***************************************************** */
//Created seperat file for each Comp, added index.js(Book.js, Library.js, Hiring.js, and NotHiring.js)
//Exported each file using "expor default **fileName**"
//Added  "import React from "react";" to each file
//Library.js File Approriate Files (Eg. "import { Book } from "./Book";")
//Imported ProTypes in Library.js file ("import PropTypes from "prop-types";")
//*****************************************************

let bookList = [
  { title: "Hunger", author: "Roxane Gays", pages: 250 },
  { title: "The Sun Also..", author: "Ernest..", pages: 340 },
  { title: "White Teeth", author: "Zadie..", pages: 380 }
];


ReactDOM.render(<Library books={bookList}/>, document.getElementById("root"));
