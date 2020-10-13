import React, { Component } from 'react';
import './App.css';
import Search from './search'
import Result from './results'

class App extends Component {
  
  state = {
    search: null,
    searchTerm: null
  }

 

  handleFetch = (fetchTerm) => {

   function populateSearch(book) {
     console.log("populateSearch ran");
      console.log("The book should be full: " + JSON.stringify(book));
    }

    console.log('handleFetch ran: ' + fetchTerm);

    var book = {}

    console.log("The book is empty: " + JSON.stringify(book));

    fetch(fetchTerm)
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON);
      
      book.name = responseJSON.items[0].volumeInfo.title;
      book.author = responseJSON.items[0].volumeInfo.authors[0];
      book.price = responseJSON.items[0].saleInfo.listPrice.amount;
      book.currency = responseJSON.items[0].saleInfo.listPrice.currencyCode;
      book.summery = responseJSON.items[0].searchInfo.textSnippet;
      populateSearch(book);
    });
  }

  
  handleSearch = (bookTitle) => {

    console.log('handleSearch ran');

    const termSearch = "https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "+inauthor&key=AIzaSyAb3LAdKu4-W2SQLrj3oEOH-QKDdsof0es"

    this.setState({
      search: bookTitle,
      searchTerm: termSearch
    });

    this.handleFetch(termSearch);

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
