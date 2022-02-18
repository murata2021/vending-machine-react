import React from 'react'
import { BrowserRouter, Route,Link,NavLink} from "react-router-dom";
import NavBar from './NavBar';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import Home from './Home';


const VendingMachine=()=>{


    return (

        <>
        <BrowserRouter>
            <NavBar/>
            <Route exact path='/'>
                <Home/>
                
            </Route>
            <Route exact path='/soda'>
                <Soda/>
                <NavLink exact to="/"> Go Back</NavLink>
            </Route>
            <Route exact path='/chips'>
                <Chips />
                <NavLink exact to="/"> Go Back</NavLink>
            </Route>
            <Route exact path='/sardines'>
                <Sardines/>
                <NavLink exact to="/"> Go Back</NavLink>
            </Route>
        </BrowserRouter>

        </>
    )
}

export default VendingMachine;