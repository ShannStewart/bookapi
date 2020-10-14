import React, { Component } from 'react';

class Filter extends Component {
    render(){
        return(
            <div>
                <h1>Filter</h1>
                <form>
                    <select name='eReader' onChange={e => this.props.onE(e.target.value)}>
                      <option value="null">Select if you are looking for a E Book or Not</option>
                      <option value="true">Include E Books</option>
                      <option value="false">Exclude E Books</option>  
                    </select>
                </form>
            </div>
        )
    }
}

export default Filter;