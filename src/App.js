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
    console.log('handleFetch ran: ' + fetchTerm);
    fetch(fetchTerm)
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON);
      console.log(responseJSON.items[0].volumeInfo.title);
      console.log(responseJSON.items[0].volumeInfo.authors[0]);
      console.log(responseJSON.items[0].saleInfo.listPrice.amount);
      console.log(responseJSON.items[0].saleInfo.listPrice.currencyCode);
      console.log(responseJSON.items[0].searchInfo.textSnippet);
    })
    //.catch(console.log('There has been a search error'));
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
