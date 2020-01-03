import React from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'

const API_LISTS = 'http://localhost:5000/lists';

export default class NewList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("A list has been added: " + this.state.value)
        this.postListTitleAxios()

    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    postListTitleAxios = async () => {
        console.log('Conected for Lists')
        await axios.post(API_LISTS, {
            title: this.state.value,
            todos: []
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        List Tile:
                        <input type= "text" name= "listTitle" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                        <input type= "submit" value= "Submit" />
                </form>
            </div>
        )
    }
}