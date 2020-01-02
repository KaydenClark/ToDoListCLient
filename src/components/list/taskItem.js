import React from 'react'
import './taskItem.css'

const TaskItem = (props) => {
    return (
        <li className= "title-task">
            {props.keys}
        </li>
    )
}

export default TaskItem