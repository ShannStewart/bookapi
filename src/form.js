import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log('handleSubmit ran');
        //console.log('looking for: ' + e.target.bookSearch.value); 
        this.props.onSearch(e.target.bookSearch.value);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Search: </label>
                    <input type='text' placeholder='Title' name='bookSearch'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
          
        )
    }
}

export default Form;