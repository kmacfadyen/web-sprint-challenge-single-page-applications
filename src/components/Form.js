import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

const Form = (props) => {

    const onChange = event => {
        // const { name, value } = event.target;
        const { name, value, type, checked } = event.target;
        // const { type, checked } = event.target;

        const valueToUse = type === 'checkbox' ? checked : value
        change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        submit();
    }

  return (
    <Form id='pizza-form' onSubmit={handleSubmit}>

        <div className='size-dropdown'>
            <label><p>Choice of Size</p></label>
            <select
                name='size'
                id='size-dropdown'
                onChange={onChange}
                value={values.size}
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
              checked={values.pepperoni}
              onChange={onChange}
            />
            </label>
            <label>Sausage
            <input
              type='checkbox'
              name='sausage'
              checked={values.sausage}
              onChange={onChange}
            />
            </label>
            <label>Onions
            <input
              type='checkbox'
              name='onions'
              checked={values.onions}
              onChange={onChange}
            />
            </label>
            <label>Extra Cheese
            <input
              type='checkbox'
              name='cheese'
              checked={values.cheese}
              onChange={onChange}
            />
            </label>

        </div>

        <div className='special-text'>
            <p>Special Instructions</p>
            <label>
              <input
                type='text'
                name='special'
                value={values.special}
                onChange={onChange}
              />
            </label>
        </div>

        <button className='btn btn-default' type='submit'>
            Add to Order
        </button>
    </Form>
  )









}

export default Form;