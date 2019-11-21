import React from "react";
import PropTypes from "prop-types";

import { Book } from "./Book";
import { Hiring } from "./Hiring";
import { NotHiring } from "./NotHiring";

class Library extends React.Component {
  //Sets the default props (books) in the event no Books value is entered
  static defaultProps = {
    books: [{ title: "Tahoe Tales", author: "Chet Whitley", pages: 1150 }]
  };

  state = {
    open: false,
    freeBookmark: true,
    hiring: false,
    data: [],
    loading: false
  };

  //Great to fetch data
  componentDidMount() {
    this.setState({ loading: true });
    //fetching data from Rest API
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }

  //Called only when an upate/change to componet
  componentDidUpdate() {
    console.log("The component just updated");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { books } = this.props;
    //Conditional rendering: rendered according to state of hire

    //Adjustments: added conditional statement that renders div that iterates data to creat seperate div per product if loaded (*added key prop and Alt text)
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}

        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.data.map(product => {
              return (
                <div key={product.id}>
                  <h2>Library Products of the Week</h2>
                  <h3>{product.name}</h3>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              );
            })}
          </div>
        )}
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

//Set Prop Types both for Library and Book
Library.propTypes = {
  //Throws and error of "book" prop is not an array - Debugging tool
  book: PropTypes.array
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
};


export default Library;