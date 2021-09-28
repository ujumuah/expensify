import React from "react"
 import Nav from "./navlink"
import {BrowserRouter,Route,Switch} from  "react-router-dom"
 const p=(props)=>{
 return(
   <BrowserRouter>
   <Nav/>
         <Switch>
            <Route path="/" component={props.home} exact={true}/>
            <Route path='/create' component={props.create} />
            <Route path='/edit' component={props.edit}  exact/>
            <Route path="/edit/:id" component={props.edit}/>
            <Route path="/works" component={props.works}/>
            <Route path="/contact" component={props.contact}/>
             <Route component={props.notFound}/>
     </Switch>
      </BrowserRouter>)
   }
export default p;