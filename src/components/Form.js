import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

const Form = (props) => {

    const handleChange = event => {
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
    <Form onSubmit={handleSubmit}>
      <p>Choice of Sauce</p>
        <label>Original Red
        <input
        //   placeholder='Select'
          type='radio'
          name='size'
          value='original red'
          handleChange={handleChange}
        //   checked={values.}
        />
        </label>
        <label>Garlic Ranch
        <input
          type='radio'
          name='size'
          value='garlic ranch'
          handleChange={handleChange}
        />
        </label>
        <label>BBQ Sauce
        <input
          type='radio'
          name='size'
          value='bbq sauce'
          handleChange={handleChange}
        />
        </label>

        <button className='btn btn-default' type='submit'>
            Add to Order
        </button>
    </Form>
  )









}

export default Form;