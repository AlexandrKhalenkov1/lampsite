import React from 'react';
import CartItem from './CartItem';

const cartItems =  ({ lampsInCart  }) => lampsInCart.map(({ 
    price, picture, id, vendorcode, name, count
    }) => {
        
        return (
    <CartItem 
    id={id} 
    key={id}
    name={name} price={price}  
    picture={picture}  
    vendorcode={vendorcode}
    count={count} />
    )});

export default cartItems;