import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Lessons from './components/Lessons'
import Login from './components/Login'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}




export default App;
