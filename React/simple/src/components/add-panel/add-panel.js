import React from 'react';
import './add-panel.css';

export default class AddPanel extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            text:''
        }
    }
    onChange(e){
        this.setState({
            text:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.add(e,this.state.text);
        this.setState(({text}) => {
            return{
                text:''
            }
        })
    }
    render(){
        return (
            <form className="add-panel" onSubmit={this.onSubmit}>
                    <input className="add-info" type="text" onChange={this.onChange} value={this.state.text}></input>
                    <button className="add-button" type="submit">ADD</button>
            </form>
        )
    }

}