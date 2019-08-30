
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './user/Login';
import Sign_up from './user/Sign_up'
import ListUsers from './user/ListUsers';

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/sign_in" component={Login}/>
      <Route path="/sign_up" component={Sign_up}/>
      <Route path="/users" component={ListUsers}/>
    </BrowserRouter>
  </div>
)

export default App

