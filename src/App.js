import React , { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Login from "./components/Login";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const UserContext = createContext({
  isLogged: true,
});

function App() {
  const [isLogged, setLogged] = useState(false);

  const setAuth = () => {
     setLogged( !isLogged );  
  };

  const value  = {
    isLogged: false,
    setAuth: false,
  }

    return ( 
      <UserContext.Provider value={value}>
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
      </UserContext.Provider>
      
    )

  
}
export default App;



