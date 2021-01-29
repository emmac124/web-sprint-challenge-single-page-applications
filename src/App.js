import {Route, Link} from 'react-router-dom';
import PizzaForm from './components/PizzaForm';
import React, {useState, useEffect} from 'react';
import schema from './validation/schema';
import * as yup from 'yup';

const initialFormValues = {
    name: '', //text
    size: '', //dropdown
    pepperoni: false, //checkboxes
    feta: false,
    mushrooms: false,
    peppers: false,
    spinach: false,
    special: '', //text
}

const initialFormErrors = {
    name: '', //text
    size: '', //dropdown
    special: '', //text
}

const initialPizza = [];
const initialDisabled = true;

const App = () => {
  //Setting state
const [pizzas, setPizzas] = useState(initialPizza);
const [formValues, setFormValues] = useState(initialFormValues);
const [errors, setErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);


//event handlers
const inputChange = (name, value) => {
    //validation with yup
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setErrors({...errors, [name]: ''})
    })
    .catch(err => {
      setErrors({...errors, [name]: err.errors[0]})
    })
    
    setFormValues({...formValues, [name] : value})
}

const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(), 
      size: formValues.size.trim(), 
      toppings:['pepperoni', 'feta', 'mushrooms', 'peppers', 'spinach'].filter(
        (topping) => formValues[topping]
      ),
      special: formValues.special.trim(), 
    }
    // if(!newPizza.name || !newPizza.size){
    //     return;
    // }
    setPizzas([...pizzas, newPizza]);
}

useEffect(() => {
    schema.isValid(formValues).then(valid => {
        setDisabled(!valid);
    })
}, [formValues])

  return (
    <section className='home-page'>
      <Link to='/pizza'>Pizza</Link>
      <h1>Lambda Eats</h1>
      <div className='picture-and-link'>
        {/* background image in styling */}
        <Link to='/pizza'>ORDER</Link>
      </div>

      <Route path='/pizza'>
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={errors}
            pizzas={pizzas}
          />
        </Route>
    </section>
  );
};
export default App;

