import React from "react"
 import Routes from "./components/routes"
 import Home from "./components/pages/home"
 import Create from "./components/pages/create"
 import Works from "./components/pages/works"
 import Contact from "./components/pages/contact"
 import NotFound from "./components/pages/404"
    // remove
import W1 from "./components/pages/works/w1"
import W2 from "./components/pages/works/w2"
import W3 from "./components/pages/works/w3"
import Edit from './components/pages/edit'
   const a =()=>{
    return(
        <div>
          <Routes
        home={Home}
        works={Works}
        contact={Contact}
        create={Create}
        edit={Edit}
        notFound={NotFound}
        page1={W1}
        page2={W2}
        page3={W3}

        />
         </div>

    )
}
 export default a;