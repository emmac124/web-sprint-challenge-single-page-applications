import React from 'react';

export default function FormData({details}){
    
if(!details) {
    return <h3>Working on Creating Your Pizza...</h3>
}

    return (
        <div className='pizza-order'>
            <h3>Name: {details.name}</h3>
            <h5>Size: {details.size}</h5>
            <h5>Special Instructions: {details.special}</h5>
            {
                !!details.toppings && !!details.toppings.length && 
                <div>
                    <h5>Toppings:</h5>
                    <ul>
                        {details.toppings.map(top => <li>{top}</li>)}
                    </ul>
                </div>
            }
        </div>
    );
}