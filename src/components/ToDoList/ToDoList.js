import React from 'react';
import ListItem from './ListCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
    baseProd,
    // base
}  from '../const'

const api = `${baseProd}`

const style = {
    listStyle: 'none'
}

export default class ToDoList extends React.Component {
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
            axios.get(`${api}/lists`),
        ]);
        
        this.renderLists(lists.data.data)  
    }

    renderDisplay = async () => {
        // console.log(this.state.lists)
        await this.getListsAxios()
    }

    componentDidMount = async () => {
        await this.renderDisplay()
        console.log(this.state.lists)
    }

    render(){
        return (
        <div>
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