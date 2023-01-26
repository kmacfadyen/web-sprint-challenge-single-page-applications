import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from "./components/Form";
import * as yup from 'yup';
import { Route, Link, Switch } from 'react-router-dom';
import Home from "./components/Home";
import formSchema from "./validation/formSchema";
// import { waitForElementToBeRemoved } from "@testing-library/react";
// import initialForm from './components/Form'


const initialForm = {
  name:'',
  size:'',
  pepperoni: false,
  sausage: false,
  onions: false,
  cheese: false,
  special: '',
}

const initialFormErrors = {
  name: 'name must be at least 2 characters'

}


const App = () => {



const [ orders, setOrders ] = useState([]);
const [ form, setForm ] = useState(initialForm);
const [ pizza, setPizza] = useState();
const [ formErrors, setFormErrors ] = useState(initialFormErrors);

// console.log(form);



const handleSubmit1 = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setOrders([ res.data, ...orders ]);
    // console.log(res.data);
  })
  .catch(err => console.error(err))
  
  .finally(() => {
    setForm(initialForm);
  })
}

const validation = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({ ...formErrors, [name]: ''});
    })
    .catch(err => {
      setFormErrors({ ...formErrors, [name]: err.errors[0]})
    })
}

const submitter = () => {
  const newPizza = {
    name: form.name.trim(),
    size: form.size.trim(),
    toppings: ['pepperoni', 'sausage', 'onions', 'cheese'],
    special: form.special.trim()
  }
  handleSubmit1(newPizza);
}

const changeHandler = ( name, value) => {
  validation(name, value);
  setForm({ ...form, [name]: value });
  
}



  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <p>Build Your Own Pizza!</p>

      <nav>
        <Link to='/' id='home'>Homepage</Link>
        <Link to='/pizza' id='order-pizza'>Make an Order!</Link>
        <Link to='/orders' id='orders'>Orders</Link>
      </nav>
    <Switch>
      <Route exact path='/'>
        <Home
        
        />
      </Route>
      <Route exact path='/pizza'>
        <Form
          form={form}  submit={submitter} change={changeHandler} errors={formErrors} 
        /> 
      </Route>
      <Route exact path='/orders'>
        {/* <section>
          {
            orders.map(order => {
              return (
                <order key={order.id} details={order} />
              )
            })
          }
        </section> */}
      </Route>
    
    </Switch>
  </div>
  );
}
export default App;
