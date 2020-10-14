import React, { Component } from 'react';
import './App.css';
import Search from './search'
import Result from './results'

class App extends Component {
  
  state = {
    search: null,
    searchTerm: null,
    bookList: [],
    eBook: null,
  }

  handleEFilter = (eStat) => {
    //console.log('handle E Filter ran');
    //console.log(eStat);

    this.setState({
      eBook: eStat
    });

  }

  handleFetch = (fetchTerm) => {

    //console.log('handleFetch ran: ' + fetchTerm);

    var list = fetch(fetchTerm)
    .then(response => response.json())
    .then(responseJSON => {
      //console.log(responseJSON);
      
      var bookList = responseJSON.items.slice(0,10).map((item, idx) => {
        //console.log(item);
        //console.log(idx);

        var book = {};

          book.name = item.volumeInfo.title;
          book.author = item.volumeInfo.authors[0];

          //console.log("Sale info: " + item.saleInfo.saleability);

          if (item.saleInfo.saleability === "FOR_SALE"){
            //console.log('calculating price');
              book.price = item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode;
            }
          else{
            //console.log('not for sale');
              book.price = "N/A";
          }

          book.summery = item.searchInfo.textSnippet;

          book.link = item.volumeInfo.infoLink;
          //console.log('link: ' + item.volumeInfo.infoLink);

          return(book)
      })

      //console.log('array: ' + bookList);
      return bookList;

    });

    return list;
  }

 

  
  handleSearch = (bookTitle) => {

    //console.log('handleSearch ran');

    const termSearch = "https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "+inauthor&key=AIzaSyAb3LAdKu4-W2SQLrj3oEOH-QKDdsof0es"

    const books = new Promise((resolve, reject) =>
    {
      const newList = this.handleFetch(termSearch);
      resolve(newList);
    });
    
    books.then((list) => {
      //(console.log("books promise: " + list));
      this.setState({
        search: bookTitle,
        searchTerm: termSearch,
        bookList: list,
      });
    }
    ).catch(() => {(console.log("Search error!"))});
  }


  render(){

    const realList = this.state.bookList.length === 0
      ? <p>Please search for a book</p>
      : <Result books={this.state.bookList}/>;
  
    return (
      <div className="App">
       <h1 className="title" >Google Book Search</h1>
       <Search onSearch={this.handleSearch} onE={this.handleEFilter}/>
       {realList}
      </div>
    );
  }
}

export default App;
