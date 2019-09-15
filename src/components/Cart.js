import React from 'react';
import CartItem from './CartItem';

/* Cart.js - Props (for sanity)
 *     items: Array - an array of cart items with { id, price, qty } shape
 *     onRemoveItem(id: int) - callback to invoke when removing an item frome the list
 *     onChangeItemQty(id: int) - a callback to invoke when changing the quantity of an item
 * 
*/

class Cart extends React.Component {

    render(){
        return(
            this.props.items.map((item) => {
                return(
                    <CartItem key={item.sku} sku={item.sku} qty={item.qty} />
                )
            })
        );
    }
}

export default Cart;