import React from "react";
import ReactDOM from "react-dom";

let bookList = [
        {"title": "Hunger", "author": "Roxane Gays", "pages": 250}, 
        {"title": "The Sun Also..", "author": "Ernest..", "pages": 340},
        {"title": "White Teeth", "author": "Zadie..", "pages": 380}
]

const Book = ({title, author, pages}) =>{
    return(
        <section>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Pages: {pages} pages </p>
        </section>
    )
}

//Map through Prop Books (which is Object BookList) coming from ReactDOM.Render
//Creat a new Book Comp for each entry
//Also creates new Unique Key Property Identifier with "i"
const Library = () => {
    return(
        <div>
            {books.map (

                (book,i) => 
                    <Book 
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                    />
            )}
        </div>
    )
}



ReactDOM.render(
  <Library books={bookList}/>,
  document.getElementById("root")
);

