import React from 'react'
import './taskItem.css'
import Axios from 'axios';

const TODOTASK_API = 'https://kc-todolist-api.herokuapp.com/tasks'

export default class TaskItem extends React.Component {

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
        console.log(this.state.value)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await this.patchTaskAxios()
        await this.props.render()
    }

    patchTaskAxios = async () => {
        await Axios.patch(`${TODOTASK_API}/${this.props.id}/titleChange`,{
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