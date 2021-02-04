import React from 'react'
import axios from 'axios'
import {
    baseProd,
    // base
}  from '../const'

const api = `${baseProd}`;

export default class Tasks extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: this.props.title
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await this.patchTaskAxios()
        await this.props.render()
    }

    patchTaskAxios = async () => {
        await axios.patch(`${api}/tasks/${this.props.id}/titleChange`,{
            title: this.state.value
        })
    }

    render(){
        return (
            <li className= "title-task">
                <form onSubmit= {this.handleSubmit}>
                    <input className= 'taskItem' value= {this.state.value} onChange={this.handleChange} />
                </form>
            </li>
        )
    }
}