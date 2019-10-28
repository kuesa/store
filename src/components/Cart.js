import React from 'react';
import CartItem from './CartItem';

import { Row, Col, Divider } from 'antd';

import './Cart.css';

/* Cart.js - Props (for sanity)
 *     items: Array - an array of cart items with { id, price, qty } shape
 *     onRemoveItem(id: int) - callback to invoke when removing an item frome the list
 *     onChangeItemQty(id: int) - a callback to invoke when changing the quantity of an item
 * 
*/


class Cart extends React.Component {

    render() {
        return (
            <>
                <h1 id='title'>Shopping Cart</h1>
                <div style={{ margin: '40px 12.5% 50px', textAlign: 'center' }}>
                    <Row>
                        <Col span={4}>Item</Col>
                        <Col span={13}>Price</Col>
                        <Col span={1}>Quantity</Col>
                        <Col span={4}>Total</Col>
                    </Row>
                    <Divider />
                </div>
                {
                    this.props.items.map((item) => {
                        return (
                            <CartItem key={item.sku} sku={item.sku} modifier={item.modifier} qty={item.qty} />
                        )
                    })
                }
            </>
        );
    }
}

export default Cart;