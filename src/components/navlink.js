import React from "react"
import {NavLink} from  "react-router-dom"
const  Header=()=>{
                return(
                    <div>
                        <h1>PortFolio</h1>
                         <ul>
                            <li>    
                                <NavLink activeClassName="isActive" to='/' exact={true}>Home</NavLink>
                            </li>
                            <li>    
                                <NavLink activeClassName="isActive" to='/create'>Create</NavLink>
                            </li>
                            <li>    
                                <NavLink activeClassName="isActive" to='/works'>Works</NavLink>
                            </li>
                            <li>    
                                <NavLink activeClassName="isActive" to='contact'>Contact</NavLink>
                            </li>
                        </ul>

                   </div>
                )
            }
            export default Header;
