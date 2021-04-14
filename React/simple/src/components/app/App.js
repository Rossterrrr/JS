import React from 'react';
import './App.css';

import Header from '../header/header';
import ItemList from '../item-list/item-list';
import AddPanel from '../add-panel/add-panel';

export default class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			data:[
			{
				name:'Сделать проект',
				important:false,
				like:false,
				id:1,
                done:false
			},{
				name:'Выгулять пса',
				important:false,
				like:false,
				id:2,
                done:false
			},{
				name:'Позвонить другу',
				important:false,
				like:false,
				id:3,
                done:false
			}
			]
		}
		this.deleteHandler = this.deleteHandler.bind(this);
		this.addHandler = this.addHandler.bind(this);
        this.doneHandler = this.doneHandler.bind(this);
    }
    deleteHandler(id){
      	this.setState(({data}) => {
			  const index = data.findIndex(elem => elem.id === id)
			  const newArr = [...data.slice(0,index), ...data.slice(index+1)];

			  return {
				data:newArr
			  }
		  })
    }
	addHandler(event,string){
		event.preventDefault();
		this.setState(({data}) => {
			const newArr = [...data,{
				name:string,
				important:false,
				like:false,
				id:data[data.length-1].id + 1,
                done:false
			}]
			return {
				data:newArr
			}
		})
	}
    doneHandler(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            let newData = JSON.parse(JSON.stringify(data));
            newData[index].done = true;
            return {
                data:newData
            }
        })
    }
    render () {
		return(
			<div className="container">
				<Header></Header>
				<AddPanel add={this.addHandler}></AddPanel>
				<ItemList info={this.state.data} deleteHandler={this.deleteHandler} doneHandler={this.doneHandler}></ItemList>
			</div>
		)
    }
    
}