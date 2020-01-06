import React from 'react'
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // Redirect
  } from "react-router-dom";
// import PrivateRoute from './PrivateRoute'
import {Login} from '../../pages/Login'
// import { AuthContext } from '../../context/auth-context'
import Home from '../home/home'
import TaskList from '../list/taskList'
import NewList from '../list/newList/newList'

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path= "/">
                    <HomePage />
                </Route>
                <Route exact path= "/login">
                    <Login />
                </Route>
                <Route path= "/login/signup">

                </Route>
                <Route path= "/taskList">
                    <ToDoList />
                </Route>
                <Route path= "/newList">
                    <CreateNewList />
                </Route>
            </Switch>
        </div>
    )
}

function HomePage(){
    return(
        <Home />
    )
}//HomePage

function ToDoList(){
    return(
        <TaskList />
    )
}//ToDoList

function CreateNewList(){
    return (
        <NewList />
    )
}