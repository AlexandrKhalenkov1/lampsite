import React, { memo } from 'react';
import CartItem from './CartItem';

const cartItems =  ({ cartitems, amount, removeTask }) => cartitems.map(({ 
    price, picture, id, vendorcode, name
    }) => {
        
        return (
    <CartItem 
    id={id} 
    key={id}
    name={name} price={price}  
    picture={picture}  
    vendorcode={vendorcode} 
    removeTask={removeTask}/>
    )});

export default cartItems;