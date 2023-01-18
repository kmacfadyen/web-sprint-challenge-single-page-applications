import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from "./components/Form";
// import * as yup from 'yup';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => {

const pizzaPost = pizzaOrder => {
  axios.post('https://reqres.in/api/orders', pizzaOrder)
  .then(res => {
    setPizza(res.data);
  })
  .catch(err => console.error(err))
}




  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <p>Build Your Own Pizza!</p>

      <Route exact path='/'>
        
      </Route>
      
    <Form


    />
      
  </div>
  );
}
export default App;
