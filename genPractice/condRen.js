import React from "react";
import ReactDOM from "react-dom";

let bookList = [
  { title: "Hunger", author: "Roxane Gays", pages: 250 },
  { title: "The Sun Also..", author: "Ernest..", pages: 340 },
  { title: "White Teeth", author: "Zadie..", pages: 380 }
];

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
//Create Hiring and NotHiring comp
const Hiring = () =>
    <div>
        <p>We are hiring, for more visit www.ourcompany.com</p>
    </div>

const NotHiring = () => 
  <div>
    <p>Sorry, we are currently not hiring. </p>
  </div>

class Library extends React.Component {
  state = {
    open: false,
    freeBookmark: true,
    hiring: false
  };

  toggleOpenClosed = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { books } = this.props;
    //Conditional rendering: rendered according to state of hire
    return (
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}
        <h1> The Library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change </button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Library books={bookList} />, document.getElementById("root"));
