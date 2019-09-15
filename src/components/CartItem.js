import React from 'react';
import RemoveItem from '../containers/RemoveItem';
import ChangeItemQuantity from '../containers/ChangeItemQuantity';

import { Row, Col } from 'antd';

/* CartItem.js - Props (for sanity)
 *     sku: string - the id (SKU, if you will), of the item
 *     qty: int - the number of items
 *     onRemove() - callback to invoke when the item is selected to be removed
 *     onChangeQty() - callback to invoke when the item's quantity is changed
 * 
*/

class CartItem extends React.Component {
    render(){
        return(
            <>
                <Row >
                    <Col style={{padding: '4px'}} span={1}><h3>{this.props.sku}</h3></Col>
                    <Col style={{padding: '4px'}} span={3}><RemoveItem sku={this.props.sku} /></Col>
                    <Col style={{padding: '4px'}} span={1}><ChangeItemQuantity sku={this.props.sku} qty={this.props.qty} /></Col>
                </Row>
            </>
        );
    }
}

export default CartItem;