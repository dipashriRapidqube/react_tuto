import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';
import Loader from 'react-loader-spinner'
import Todos from './Components/Todos' 
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import About from './Components/Pages/About'
import axios from 'axios';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
// import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class App extends Component{
  
  ok = false;
  state={
    todos:[
        // {
        //     id:1,
        //     title:'Start learning React',
        //     completed:false,
        // },
        // {
        //     id:2,
        //     title:'Start learning Mongo',
        //     completed:false,
        // },
        // {
        //     id:3,
        //     title:'Start learning Hyperledger',
        //     completed:true,
        // }
    ],
     isLoading: false
    
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos: res.data}))

  
}

    //marks todo completed
    markComplete = (id) =>{
       this.setState({todos: this.state.todos.map(todo =>{
         if(todo.id === id){
          todo.completed= !todo.completed
         }
         return todo
       }) });
    }

    //Delete todo
    delTodo = (id)=>{
     this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !==id)]})
    }

    bc = () => {
      this.ok = false;
    }

    //AddTodo
    adTodo = (title) =>{
      // this.setState({isLoading: !isLoading});
      this.ok = true;
      // const lastid = this.state.todos[this.state.todos.length-1].id;
      // console.log(lastid);

      const newTD={
        id:(+ new Date()),
        title:title,
        completed:false
      }
      axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',newTD).then(res =>
        this.setState({todos: [...this.state.todos,newTD]}),
        // this.setState({isLoading: false})
        this.bc()
      )
      
    }

render(){
// console.log(this.state.todos)
 return (
   <Router>
      <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.ok}
          
        />

    <div className="App">
      <Header/>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo adTodo={this.adTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            
           
        </React.Fragment>
      )}/>
      <Route  path="/about" component={About}/>
      
    </div>
    </Router>
  );
}
}

export default App;
