import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  // add imported funtions here
  import Home from './components/home/home'
  import TaskList from './components/list/taskList'
  import NewList from './components/list/newList/newList'


export default function NavBar() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to= "/">Home</Link>
                        </li>
                        <li>
                            <Link to= "/taskList">Task List</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path = "/">
                        <HomePage />
                    </Route>
                    <Route path = "/taskList">
                        <ToDoList />
                    </Route>
                    <Route path = "/newList">
                        <CreateNewList />
                    </Route>
                </Switch>
            </div>
        </Router>
    ) // return
} //NavBar
// add funtions down here to render

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