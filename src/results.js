import React, { Component } from 'react';
import Book from './book'

class Result extends Component {
    
    render(){

        const books = this.props.books.map((item, idx) =>
            <Book
                key={idx}
                name={item.name}
                author={item.author}
                price={item.price}
                summery={item.summery}
            />);

        return(
            <div>
                <h1>Results</h1>
                {books}
            </div>
        
        )
    }
}

export default Result;