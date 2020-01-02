import React from 'react';
import './taskList.css'
import axios from 'axios'
import ListItem from './listItem'
import { Link } from 'react-router-dom'

const TODOLISTS_API = 'https://kc-todo-api.herokuapp.com/lists';
const API_LISTRAW = 'https://kc-todo-api.herokuapp.com/listsRaw'

const style = {
    listStyle: 'none'
}

export default class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        } //state
    }// constructor

    renderLists = (listData) => {
        const lists = listData.map((lists) =>
        <ListItem key= {"Title-"+ lists.title} keys= {lists} id= {lists.id}/>
        )
        this.setState({lists})
    }

    getListsAxios = async() => {
        console.log('Coneected for Lists')
        const [lists] = await Promise.all([
            axios.get(TODOLISTS_API),
            axios.get(API_LISTRAW),
        ]);
            this.renderLists(lists.data.data)
            
    }

    componentDidMount = async () => {
        await this.getListsAxios()
    }

    render(){
        return (
        <div>
            <p></p>
            <Link to= "/newList">
                <button>Add List</button><br />
            </Link>
            <ul style = {style}>
                {this.state.lists}
            </ul>
         </div>
        ) //return 
    } //render
} //Home