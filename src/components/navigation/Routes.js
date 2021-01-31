import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import TaskList from '../list/taskList';

  export const Routes = () =>  {

    return (
        <div>
            <Switch>
                <Route exact path= '/'>
                    <TaskList/>
                </Route>
            </Switch>
        </div>
    )  //Return
  } //Routes

export default Routes