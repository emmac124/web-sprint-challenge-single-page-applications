import React from 'react';
import {Link} from 'react-router-dom';
import Form from './Form'

export default function PizzaForm({values, change, submit, disabled, errors, pizzas}){
   
   const onSubmit = (evt) => {
       evt.preventDefault();
       submit();
   }

   const onChange = (evt) => {
       const {name, value, type, checked} = evt.target;
       const valueToUse = type === 'checkbox' ? checked : value;
       change(name, valueToUse);
   }
   
    return (
        <section className='order'>
        <form className='form-container' onSubmit={onSubmit}>
           <div className='form-inputs'>
            <h2>Pizza Selections</h2>
            <Link to='/'>Home</Link>
            <br /><br />           
            <label> Name
                <input 
                name='name'
                type='text'
                value={values.name}
                onChange={onChange}
                placeholder='Type Name Here' />
            </label>
            <br /><br />
            <label>
                Size
                <select onChange={onChange} value={values.size} name='size'>
                    <option value=''>---Select Size---</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xl'>Extra Large</option>
                </select> 
            </label>
            <br /><br />
            <label>
                Pepperoni
                <input 
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange} />
            </label>
            <br /><br />
            <label>
                Feta
                <input 
                type='checkbox'
                name='feta'
                checked={values.feta}
                onChange={onChange} />
            </label>
            <br /><br />
            <label>
                Mushrooms
                <input 
                type='checkbox'
                name='mushrooms'
                checked={values.mushrooms}
                onChange={onChange} />
            </label>
            <br /><br />
            <label>
                Peppers
                <input 
                type='checkbox'
                name='peppers'
                checked={values.peppers}
                onChange={onChange} />
            </label>
            <br /><br />
            <label>
                Spinach
                <input 
                type='checkbox'
                name='spinach'
                checked={values.spinach}
                onChange={onChange} />
            </label>
            <br /><br />
            <label>
                Special Instructions
                <input 
                name='special'
                type='text'
                onChange={onChange}
                value={values.special}
                placeholder='n/a if none' />
            </label>
            <br /><br />
           </div>
           <div className='button-errors'>
               <button disabled={disabled}>Place Order</button>
               <div className='errors'>
                   <div>{errors.name}</div>
                   <div>{errors.size}</div>
                   <div>{errors.toppings}</div>
               </div>
           </div>
        </form>
        <div className='order-confirm'>
        {
            pizzas.map(pizza => {
                return (
                    <Form details={pizza} />
                )
            })
        }
        </div>
        </section>
    );
}

