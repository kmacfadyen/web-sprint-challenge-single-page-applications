import { toHaveErrorMessage, toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import App from '../App';




const Form = (props) => {

  const { form, submit, change, errors } = props;
console.log('value', props);
//   console.log(useParams());

  const handleSubmit = event => {
    event.preventDefault();
    submit();
}

    const onChange = event => {
        // const { name, value } = event.target;
        const { name, value, type, checked } = event.target;
        // const { type, checked } = event.target;

        // setForm({ ...form, [name]: value });


        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    

  return (
    <form id='pizza-form' onSubmit={handleSubmit}>
        <p>{errors.name}</p>
        <div className='name-input'>
            <label><p>Name: </p>
              <input
                name='name'
                id='name-input'
                type='text'
                value={form.name}
                onChange={onChange}
              />
            </label>
        </div>

        <div className='size-dropdown'>
            <label><p>Choice of Size</p></label>
            <select
                name='size'
                id='size-dropdown'
                onChange={onChange}
                value={form.size}
            >
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>  
            </select>

        </div>
        <div className='pizza-sauce'>
            <p>Choice of Sauce</p>
            <label>Original Red
            <input
        //   placeholder='Select'
                type='radio'
                name='sauce'
                value='original red'
                onChange={onChange}
        //   checked={values.}
            />
            </label>
            <label>Garlic Ranch
            <input
                type='radio'
                name='sauce'
                value='garlic ranch'
                onChange={onChange}
            />
            </label>
            <label>BBQ Sauce
            <input
                type='radio'
                name='sauce'
                value='bbq sauce'
                onChange={onChange}
            />
            </label>
            <label>Spinach Alfredo
            <input
                type='radio'
                name='sauce'
                value='spinach alfredo'
                onChange={onChange}
            />
            </label>
        </div>

        <div className='pizza-toppings'>

        </div>

        <div className='pizza-toppings'>
            <p>Add Toppings</p>
            <label>Pepperoni
            <input
              type='checkbox'
              name='pepperoni'
              checked={form.pepperoni}
              onChange={onChange}
            />
            </label>
            <label>Sausage
            <input
              type='checkbox'
              name='sausage'
              checked={form.sausage}
              onChange={onChange}
            />
            </label>
            <label>Onions
            <input
              type='checkbox'
              name='onions'
              checked={form.onions}
              onChange={onChange}
            />
            </label>
            <label>Extra Cheese
            <input
              type='checkbox'
              name='cheese'
              checked={form.cheese}
              onChange={onChange}
            />
            </label>

        </div>

        <div className='special-text'>
            <p>Special Instructions</p>
            <label>
              <input
                type='text'
                id='special-text'
                name='special'
                value={form.special}
                onChange={onChange}
              />
            </label>
        </div>

        <button className='btn btn-default' type='submit' id='order-button'>
            Add to Order
        </button>
    </form>
  )
}

export default Form;