import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lessons from './components/Lessons'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/login" component={Login} />
        </Switch>
{/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}




export default App;
