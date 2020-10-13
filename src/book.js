import React, { Component } from 'react';

class Book extends Component {
    render(){

        const name = this.props.name;
        const author = this.props.author;
        const price = this.props.price;
        const summery = this.props.summery;

        return(
            <div>
                <h1>{name}</h1>
                <h2>By: {author}</h2>
                <p>Price: {price}</p>
                <p>About: {summery}</p>
            </div>
        )
    }
}

export default Book;