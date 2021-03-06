import React from 'react'
import TaskItem from './taskItem'
import './listItem.css'
import axios from 'axios'

const TODOTASK_API = 'https://kc-todolist-api.herokuapp.com/tasks'
const TODOLIST_API = 'https://kc-todolist-api.herokuapp.com/lists'


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

    handleSubmit = async (event) => {
        event.preventDefault()
        alert("A task has been added: " + this.state.value)
        await this.postTaskAxios()
        console.log('posted')
        await this.props.getList()
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleClickDelete = async (event) => {
        event.preventDefault()
        alert("a Task has been delted")
        await this.delteListAxios()
        await console.log('delted list')
        await this.props.getList()
    }

    renderTasks = (taskList) => {
        // console.log(taskList)
        const tasks = taskList.map((task) =>
        <TaskItem key= {task.id} title= {task.title} id= {task.id} render= {this.props.getList}/>
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
                    {this.props.title.title}
                    <form onSubmit={this.handleClickDelete}>
                        <input type= "submit" value= "Delete List"></input> 
                    </form>
                </div>
                <ul>
                    {this.renderTasks(this.props.title.data)}
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