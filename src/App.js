import React, { Component } from 'react';
import './App.css';
import Search from './search'
import Result from './results'

class App extends Component {
  
  state = {
    search: null,
    searchTerm: null,
    bookList: [],
  }

 

  handleFetch = (fetchTerm) => {

    //console.log('handleFetch ran: ' + fetchTerm);

    var list = fetch(fetchTerm)
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON);
      
      var bookList = responseJSON.items.slice(0,5).map((item, idx) => {
        console.log(item);
        console.log(idx);

        var book = {};

          book.name = item.volumeInfo.title;
          book.author = item.volumeInfo.authors[0];

          //console.log("Sale info: " + item.saleInfo.saleability);

          if (item.saleInfo.saleability === "FOR_SALE"){
            //console.log('calculating price');
              book.price = item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode;
            }
          else{
            console.log('not for sale');
          }

          book.summery = item.searchInfo.textSnippet;

          return(book)
      })

      console.log('array: ' + bookList);
      return bookList;

    });

    return list;
  }

 

  
  handleSearch = (bookTitle) => {

    console.log('handleSearch ran');

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

    const tempList = [
      {name: "Moby Dick", author: "My boy", price: "3.50", summery: "Whale gets killed"},
      {name: "Don't Stop", author: "My girl", price: "500", summery: "A made up book"},
      {name: "Punchmaster", author: "Sensei", price: "Free", summery: "Punchmaster punches"},
      {name: "da Jetts", author: "Z the Man", price: "2 whole dollars", summery: "Something happens, probably"}
  ];
  
    return (
      <div className="App">
       <h1 className="title" >Google Book Search</h1>
       <Search onSearch={this.handleSearch}/>
       <Result books={tempList}/>
      </div>
    );
  }
}

export default App;
