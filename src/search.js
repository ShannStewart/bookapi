import React, { Component } from 'react';
import Form from './form'
import Filter from './filter'

class Search extends Component {

    render(){
        return(
            <div>
                <Form onSearch={this.props.onSearch}/>
                <Filter onE={this.props.onE}/>
            </div>
        )
    }
}

export default Search;