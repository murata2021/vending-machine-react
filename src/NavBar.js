import React from "react";
import { BrowserRouter, Route,Link,NavLink} from "react-router-dom";
import './NavBar.css'


const NavBar=()=>{

    return (
        <>
            <nav className='NavBar'>
                <NavLink exact to="/soda" style={{fontSize:'50px',textDecoration:'none'}}> Soda </NavLink>
                <NavLink exact to="/chips" style={{fontSize:'50px',textDecoration:'none'}}> Chips </NavLink>
                <NavLink exact to="/sardines" style={{fontSize:'50px',textDecoration:'none'}}> Sardines</NavLink>
            </nav>
        </>
    )


}

export default NavBar;