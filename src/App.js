import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import UserSignUp from './UserSignUp/UserSignUp'
import Login from './Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <div className="text-center">
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/cadastro">
              <UserSignUp />
            </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
