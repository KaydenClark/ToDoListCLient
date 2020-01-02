import React from 'react';
import './taskList.css'
import axios from 'axios'
import ListItem from './listItem'
import { Link } from 'react-router-dom'

const TODOLISTS_API = 'http://localhost:5000/lists';
// const API_LISTRAW = 'https://localhost:5000/listsRaw';

const style = {
    listStyle: 'none'
}

export default class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lists: [],
        } //state

        this.handleClickDelete = this.handleClickDelete.bind(this)
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
            // axios.get(API_LISTRAW),
        ]);
            this.renderLists(lists.data.data)
            
    }

    handleClickDelete() {

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
            {/* <button onClick={this.handleClickDelte}>
                Delete List
            </button> */}
            <ul style = {style}>
                {this.state.lists}
            </ul>
         </div>
        ) //return 
    } //render
} //Home