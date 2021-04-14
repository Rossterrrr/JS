import React from 'react';
import Item from '../item/item';
import './item-list.css';

const ItemList = ({info,deleteHandler,doneHandler}) => {
    let elements = info.map(item => {
        return(
            <Item name={item.name} important={item.important} like={item.like} done={item.done} deleteHandler={() => deleteHandler(item.id)} doneHandler={() => doneHandler(item.id)}></Item>
        )
    })
    return (
        <div className="item-list">
            {elements}
        </div>
    )
   
}
export default ItemList;