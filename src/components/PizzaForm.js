import React from 'react';

export default function PizzaForm({values, change, submit, disabled, errors}){
   
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
        <form className='form-container' onSubmit={onSubmit}>
            
        </form>
    );
}

