import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title:''
    }

    onClick = (e) => {
        if(this.state.title !== ''){
            e.preventDefault();
            this.props.adTodo(this.state.title);
            this.setState({ title: '' });
        }
      }

    onChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container">
              
                    <div className="row" style={{padding:'10px'}} >
                        <div className="col-6">
                            <input type="text" style={{width:'100%'}} 
                            placeholder="Add Todo ..."
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}></input>
                        </div>
                        <div>
                            <button type="submit" onClick={this.onClick} name="Submit"  style={{width:'60px',textAlign:'center'}}  className="btn btn-success" >Add</button>
                        </div>
                    </div>
            
            </div>
        )
    }
}

export default AddTodo
