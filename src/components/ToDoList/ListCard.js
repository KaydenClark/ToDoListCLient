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
import Snackbar from '@material-ui/core/Snackbar'

const api = `${base}`
const u_id = require('generate-unique-id')

export default class ListCard extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            value: '',
            tasks: [],
            open: false
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

    renderTasks = async (taskList) => {
        const task = taskList.map((taskObj) =>
        <Tasks key = {u_id()} title= {taskObj} getTasks= {this.getTasksAxios}/>
        )
        const taskItems = []
        taskItems.push(task)
        // console.log(taskItems)
        await this.setState({taskItems : taskItems})
        // console.log(this.state.taskItems)
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

    handleClick = (event) => () => {
        console.log('Hello')

        this.setState({ open: true});
      };
    
    handleClose = (event) => {
        event.preventDefault()
        this.setState({open: false });
    }

    componentDidMount = async () => {
        await this.getTasksAxios()
        await this.renderTasks(this.state.tasks)
    }


    render(){
        return (
            <div >
                <Card >
                    <CardContent>
                    {this.props.title}
                    {/* <div  className= "title"> 
                        <form onSubmit={this.handleClickDelete}>
                            {this.props.title}
                        </form>
                    </div> */}
                    <br />
                    <Typography  color="textSecondary">
                        Tasks
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.state.taskItems}
                        <form onSubmit={this.handleSubmit}>
                            <input type= "text" placeholder= "add new task" value={this.state.value} onChange={this.handleChange}/>
                        </form>
                        <Button onClick={this.handleClick}>
                                Bottom-Right
                            </Button>
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                        <Button size="small" color="secondary">
                        Add Task
                        </Button>
                    </CardActions>
                </Card>
                <br />
                <Snackbar
                    anchorOrigin={'bottom', 'right'}
                    open={this.state.open}
                    onClose={this.handleClose}
                    message="Nice"
                    // key={vertical + horizontal}
                />
            </div>
        )
    }
}