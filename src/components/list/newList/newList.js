import React, { useState } from 'react'
import {
    useHistory,
    useLocation,
} from "react-router-dom";
import axios from 'axios'
import { CreateList } from '../../../context/listCreate'

const API_LISTS = 'http://localhost:5000/lists';

export const NewList = () => {
    const [value, setValue] = useState('')

    let history = useHistory();
    let location = useLocation();

    const postListTitleAxios = async () => {
        console.log('Conected for Lists')
        await axios.post(API_LISTS, {
            title: value,
            todos: []
        });
    }

    let { from } = location.state || { from: { pathname: "/taskList" } };
    let newList = (event, contextFunc) => {
        event.preventDefault()
        alert("A list has been added: " + value)
        postListTitleAxios()
        contextFunc(() => {
            history.replace(from);
        });
    };
    
    return (
        <CreateList.Consumer>
            {({ create }) =>(
            <div  className= "loginForm">
                <h1> List Title </h1>
                <form onSubmit={(event) => newList(event, create)}>
                    <input type= "text" name= "listTitle" placeholder= "list title"  onChange= {event => {
                        const list =  event.target.value
                        setValue(list)
                        // console.log(value)
                        }} />
                    <input type= "submit" value= "Submit" />
                </form>
            </div>
                )
            }
        </CreateList.Consumer>
    )
}