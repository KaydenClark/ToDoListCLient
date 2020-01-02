import React from 'react'
import TaskItem from './taskItem'
import './listItem.css'
import axios from 'axios'

const TODOTASK_API = 'http://localhost:5000/tasks'
const TODOLIST_API = 'http://localhost:5000/lists'


export default class ListItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        alert("A task has been added: " + this.state.value)
        this.postTaskAxios()
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleClickDelete = async () => {
        await axios.delete(TODOLIST_API + '/' + this.props.id)
    }

    renderTasks = (taskList) => {
        const tasks = taskList.map((task) =>
        <TaskItem key= {"title"+ task} keys= {task} />
        )
        return tasks
    }

    postTaskAxios = async () => {
        console.log('Conected for Lists')
        await axios.post(TODOTASK_API + '/' + this.props.id, {
            title: this.state.value,
            complete: false
        });
    }

    delteListAxios = async () => {
        console.log('connected for deleting list')
        await axios.delete(TODOLIST_API + '/' + this.props.id)
    }


    render(){
        return (
            <div >
                <div  className= "title"> 
                    {this.props.keys.title}
                    <button onClick={this.handleClickDelete}>Delete List</button> 
                </div>
                <ul>
                    {this.renderTasks(this.props.keys.data)}
                   <li>
                       <form onSubmit={this.handleSubmit}>
                           <input type= "text" placeholder= "add new task" value={this.state.value} onChange={this.handleChange}/>
                           <input type= "submit" value= "+"/>
                        </form>
                    </li>
                </ul>
       
                <br />
            </div>
        )
    }
}