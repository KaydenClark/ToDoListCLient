import React from 'react'
import TaskItem from './taskItem'
import './listItem.css'


const ListItem = (props) => {
    // console.log(props.keys)
    const taskList = props.keys.data
    // console.log(taskList)
    const renderTasks = (taskList) => {
        const tasks = taskList.map((task) =>
        <TaskItem key= {"title"+ task} keys= {task} />
        )
        return tasks
    }

    // console.log(tasks)
    return (
        <div >
            <div  className= "title"> 
                {props.keys.title} 
            </div>
            <ul>
                {renderTasks(taskList)}
               <li>Add new task <button>+</button></li>
            </ul>
   
            <br />
        </div>
    )
}

export default ListItem