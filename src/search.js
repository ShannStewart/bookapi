import React, { Component } from 'react';
import Form from './form'
import Filter from './filter'

class Search extends Component {
    render(){
        return(
            <div>
                <h1>Search!</h1>
                <Form/>
                <Filter/>
            </div>
        )
    }
}

export default Search;