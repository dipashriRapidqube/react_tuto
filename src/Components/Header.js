
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <header style={headerStyle}>
                    <h2>TODO LIST</h2>
                    <Link style={linkStyle} to="/">Home</Link> | 
                    <Link style={linkStyle} to="/about"> About Us</Link>
                </header>
            </div>
        )
    }
}
 const headerStyle ={
    background:'#333',
    textAlign: 'center',
     color:'#fff',
     padding: '10px'
 }
 const linkStyle ={
    textDecoration:'none',
    color:'#fff',
 }
export default Header
