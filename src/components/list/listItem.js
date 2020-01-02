import React from 'react'
import TaskItem from './taskItem'
import './listItem.css'
import axios from 'axios'

const TODOLIST_API = 'https://kc-todo-api.herokuapp.com/tasks'

export default class ListItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        alert("A task has been added: " + this.state.value)
        this.postTaskAxios()
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    renderTasks = (taskList) => {
        const tasks = taskList.map((task) =>
        <TaskItem key= {"title"+ task} keys= {task} />
        )
        return tasks
    }

    postTaskAxios = async () => {
        console.log('Conected for Lists')
        await axios.post(TODOLIST_API + '/' + this.props.id, {
            title: this.state.value,
            complete: false
        });
    }

    componentDidMount = () => {
        console.log(TODOLIST_API + '/' + this.props.id)
    }


    render(){
        return (
            <div >
                <div  className= "title"> 
                    {this.props.keys.title} 
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