import React from 'react'
import Tasks from './Tasks'
import axios from 'axios'
import {
    // baseProd
    base
}  from '../const'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const api = `${base}`

export default class ListCard extends React.Component {
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
        await this.deleteListAxios()
        await this.props.getList()
    }

    getTasksAxios = async () => {
        const [tasks] = await Promise.all([
            axios.get(`${api}/${this.props.title}/tasks`),
        ])
        const taskList = tasks.data
        this.setState(taskList)
        // console.log(this.state.tasks)
    }

    renderTasks = (taskList) => {
        const task = taskList.map((taskObj) =>
        <Tasks key= {Date.now() + taskObj} title= {taskObj.title} />
        )
        console.log(task)
        this.setState({taskList : task})
    }

    postTaskAxios = async () => {
        console.log('Conected for Lists')
        await axios.post(`${api}/tasks/${this.props.id}`, {
            title: this.state.value,
            complete: false
        });
    }

    deleteListAxios = async () => {
        console.log('connected for deleting list')
        await axios.delete(`${api}/lists/${this.props.id}`)
    }

    componentDidMount = async () => {
        await this.getTasksAxios()
        this.renderTasks(this.state.tasks)
    }


    render(){
        return (
            <div >
                <Card >
                    <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                        
                    </Typography>
                    <Typography variant="h5" component="h2">
                    <div  className= "title"> 
                        
                        <form onSubmit={this.handleClickDelete}>
                            {this.props.title}
                            {/* <p></p> */}
                            <input type= "submit" value= "-"></input> 
                        </form>
                    </div>
                    </Typography>
                    <Typography  color="textSecondary">
                        Tasks
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.state.taskList}
                        <form onSubmit={this.handleSubmit}>
                            <input type= "text" placeholder= "add new task" value={this.state.value} onChange={this.handleChange}/>
                            <input type= "submit" value= "+"/>
                        </form>
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                        <Button size="small" color="secondary">
                        Delete
                        </Button>
                    </CardActions>
                </Card>
                <br />
            </div>
        )
    }
}