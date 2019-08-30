
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './user/Login';
import Sign_up from './user/Sign_up'



const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/sign_in" component={Login}/>
      <Route path="/sign_up" component={Sign_up}/>
    </BrowserRouter>
  </div>
)

export default App

