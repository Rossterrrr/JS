import React from 'react';
import './item.css';

const Item = (props) => {
    let classString = 'item-name';
    if(props.important){
        classString += ' important';
    }
    if(props.like){
        classString +=' like';
    }
    if(props.done){
        classString += ' done';
    }
    return(
        <div className="item">
            <span className={classString}>{props.name}</span>
            <div className="button-bar">
                <i className="item-done-button material-icons" onClick={props.doneHandler}>done</i>
                <i className="item-delete-button material-icons" onClick={props.deleteHandler}>delete</i>
            </div>
            
        </div>
    )
    
}

export default Item;