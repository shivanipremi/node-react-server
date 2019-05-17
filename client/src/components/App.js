import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from './Header'
const Dashboard= ()=> <div>Dashboard</div>
const ServeyNew= ()=> <div>ServeyNew</div>
const Landing= ()=> <div>Landing</div>


const App = () => {
    return (
        <div>
           <BrowserRouter>
           <div>
               <Header />
               <Route exact path = "/" component = {Header}/>
               <Route path = "/surveys" component = {Landing}/>

           </div>
           </BrowserRouter>
        </div>
    )
}

export default App;
