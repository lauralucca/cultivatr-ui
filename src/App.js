import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import UserSignUp from './pages/UserSignUp/UserSignUp'
import Login from './pages/Login/Login'
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { MAIN_THEME } from './styles/theme'
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider theme={ MAIN_THEME }>
      <Router>
        <Header />
        <Switch>
          <div className="text-center">
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/inicio">
                <Dashboard />
              </Route>
              <Route path="/cadastro">
                <UserSignUp />
              </Route>
          </div>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
