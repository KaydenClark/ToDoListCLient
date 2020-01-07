import React from 'react';
import './taskList.css'
import axios from 'axios'
import ListItem from './listItem'
import { Link } from 'react-router-dom'

const TODOLISTS_API = 'http://localhost:5000/lists';

const style = {
    listStyle: 'none'
}

export default class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lists: [],
        } //state
    }// constructor

    renderLists = (listData) => {
        // console.log(listData)
        const lists = listData.map((lists) =>
        <ListItem key= {lists.id} title= {lists} id= {lists.id} 
        getList= {this.getListsAxios}
        />
        )
        this.setState({lists})
    }

    getListsAxios = async() => {
        console.log('Coneected for Lists')
        const [lists] = await Promise.all([
            axios.get(TODOLISTS_API),
        ]);
            this.renderLists(lists.data.data)
            
    }

    renderDisplay = async () => {
        await this.getListsAxios()
    }

    componentDidMount = async () => {
        await this.renderDisplay()
    }

    render(){
        return (
        <div>
            <p></p>
            <Link to= "/newList">
                <button>Add List</button><br />
            </Link>
            <ul style = {style} className= "taskLists">
                {this.state.lists}
            </ul>
         </div>
        ) //return 
    } //render
} //Home