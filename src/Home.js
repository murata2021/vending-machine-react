import React from "react";
import './Home.css'
import { BrowserRouter, Route,Link,NavLink} from "react-router-dom";



const Home=()=>{

    return (
        <>
            <div className='Home-hero'></div>
            <p className="Home-header">WELCOME TO THE VENDING MACHINE!</p>
            <p className='Home-content-text'>HOW CAN I HELP YOU?</p>

            <div className="Home-container">
                <ul>
                    <li><Link exact to="/soda">Soda</Link> </li>
                    <li><Link exact to="/chips">Chips</Link></li>
                    <li><Link exact to="/sardines">Fresh Sardines</Link></li> 
                </ul>
            </div>

        </>
    )
}

export default Home;