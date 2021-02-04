import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import ToDoList from '../../Pages/ToDoList';

  export const Routes = () =>  {

    return (
        <div>
            <Switch>
                <Route exact path= '/'>
                    <ToDoList/>
                </Route>
            </Switch>
        </div>
    )  //Return
  } //Routes

export default Routes