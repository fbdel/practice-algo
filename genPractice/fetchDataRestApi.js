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
const Hiring = () => (
  <div>
    <p>We are hiring, for more visit www.ourcompany.com</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>Sorry, we are currently not hiring. </p>
  </div>
);

class Library extends React.Component {
  state = {
    open: false,
    freeBookmark: true,
    hiring: false,
    data: [],
    loading:false
  };
  
  //Great to fetch data
  componentDidMount() {
    this.setState({loading:true})
    //fetching data from Rest API
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
        .then(data => data.json())
        .then(data => this.setState({data, loading:false}))

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
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        
        {this.state.loading 
          ? "loading..." 
          : <div>
            {this.data.map(product => { 
              return(
                <div>
                  <h2>Library Products of the Week</h2>
                  <h3>{product.name}</h3>
                  <img src={product.image} height={100}/>
                </div>
              )
            })}
        </div>

        }
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
