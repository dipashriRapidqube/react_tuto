import React, { Component } from 'react'

export class TodoItems extends Component {
    getStyle = () =>{
            return{
                textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }
    // markComplete = (e) =>{
    //     console.log(this.props)
    // }

    render() {
        const {id, title} = this.props.todo
        return (
            <div className="container-fluid">
                <div className="container text-center">
                     <div className="row" style={{backgroundColor:"#f4f4f4",borderBottom: "1px #ccc dotted"}}>
                            <div className="col-2 p-2">
                              {id}
                            </div>
                            <div className="col-2 p-2">
                                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                            </div>
                            <div className="col-4 p-2" style={this.getStyle()}>
                                <p>{title}</p>
                            </div>
                            <div className="col-4 p-2">
                              <button className="btn btn-danger" onClick={this.props.delTodo.bind(this,id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                </div>
            </div>
           
            </div>
            
        )
    }
}

export default TodoItems
