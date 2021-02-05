import React from 'react';
import ListItem from '../components/ToDoList/ListCard'
import axios from 'axios'
import {
    // baseProd,
    base
}  from '../components/const'

const api = `${base}`
const u_id = require('generate-unique-id')

const style = {
    listStyle: 'none'
}

export default class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listTitles: [],
        } //state
    }// constructor

    renderLists = (listData) => {
        // console.log(listData)
        const listTitles = listData.map((titleObj) =>
        <ListItem key= {u_id()} title= {titleObj[0].title} 
        getList= {this.getListsAxios}
        />)
        // console.log(lists)
        this.setState({listTitles})
    }

    getListsAxios = async() => {
        console.log('Coneected for Lists')
        const [lists] = await Promise.all([
            axios.get(`${api}/lists`),
        ]);
        // console.log(lists.data)
        this.renderLists(lists.data)  
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
            <ul style = {style} className= "taskLists">
                {this.state.listTitles}
            </ul>
         </div>
        ) //return 
    } //render
} //Home