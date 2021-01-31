import React from 'react'
import TaskItem from './taskItem'
import axios from 'axios'
import {
    baseProd
    // base
}  from '../const'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const bull = <span>•</span>;

const api = `${baseProd}`
// const api = `${base}/todov2/lists`


// const classes = useStyles();


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
        await this.deleteListAxios()
        // await console.log('delted list')
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
        await axios.post(`${api}/tasks/${this.props.id}`, {
            title: this.state.value,
            complete: false
        });
    }

    deleteListAxios = async () => {
        console.log('connected for deleting list')
        await axios.delete(`${api}/lists/${this.props.id}`)
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
                            {this.props.title.title}
                            {/* <p></p> */}
                            <input type= "submit" value= "-"></input> 
                        </form>
                    </div>
                    </Typography>
                    <Typography  color="textSecondary">
                        Tasks
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.renderTasks(this.props.title.data)}
                        <form onSubmit={this.handleSubmit}>
                            <input type= "text" placeholder= "add new task" value={this.state.value} onChange={this.handleChange}/>
                            <input type= "submit" value= "+"/>
                        </form>
                    </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                <br />
                {/* <div  className= "title"> 
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
       
                <br /> */}
            </div>
        )
    }
}