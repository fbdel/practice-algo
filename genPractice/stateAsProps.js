import React from "react";
import ReactDOM from "react-dom";

let bookList = [
  { title: "Hunger", author: "Roxane Gays", pages: 250 },
  { title: "The Sun Also..", author: "Ernest..", pages: 340 },
  { title: "White Teeth", author: "Zadie..", pages: 380 }
];

//Added freeBookmark: accessing via Props/passing down to child Comp
const Book = ({ title, author, pages, freeBook }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Pages: {pages} pages </p>
      <p> Freee Bookmark: {freeBookmark ? "yes" : "no"}</p>
    </section>
  );
};

//Define State in the root of the tree (ref..Lifting State Up)- in this case is the Library Comp
//Added freeBookmark state then retrieved using this.state.freeB ...
class Library extends React.Component {
    state = { 
        open: false,
        freeBookmark: true
    };
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({open: !prevState.open}));
    };

    render() {
        const { books } = this.props;

        return (
            <div>
                <h1> The Library is {this.state.open ? "open" : "closed"}</h1>
                <button onClick={this.toggleOpenClosed}>Change </button>
                {books.map((book, i) => (
                <Book
                    key={i}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
                    freeBookmark = {this.state.freeBookmark}
                />
                ))}
            </div>
        );
    }
}

ReactDOM.render(<Library books={bookList} />, document.getElementById("root"));
