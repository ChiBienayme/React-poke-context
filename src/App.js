import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Login from "./components/Login";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export function App() {

    return ( 
      <BrowserRouter>
            <nav className='nav nav-tabs'>
                <Link className="nav-link" to="/"> Home  </Link>
                <Link className="nav-link" to="/login"> Login  </Link>
                
            </nav>

            <Switch>
              
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} /> 

            </Switch>

          </BrowserRouter>
    )
          
  
}

export default App;

