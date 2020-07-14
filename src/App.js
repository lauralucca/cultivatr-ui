import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { MAIN_THEME } from "./styles/theme"
import Header from "./components/Header/Header"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import UserSignUp from "./pages/UserSignUp/UserSignUp"
import UserInterests from "./pages/UserInterests/UserInterests"

function App() {
  return (
    <ThemeProvider theme={MAIN_THEME}>
      <Router>
        <Header />
        <div className="text-center">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/inicio">
              <Dashboard />
            </Route>
            <Route path="/interesses">
              <UserInterests />
            </Route>
            <Route path="/cadastro">
              <UserSignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
