import React from 'react';
import RemoveItem from '../containers/RemoveItem';
import ChangeItemQuantity from '../containers/ChangeItemQuantity';

import { Row, Col, Skeleton, Divider } from 'antd';

/* CartItem.js - Props (for sanity)
 *     sku: string - the id (SKU, if you will), of the item
 *     qty: int - the number of items
 *     onRemove() - callback to invoke when the item is selected to be removed
 *     onChangeQty() - callback to invoke when the item's quantity is changed
 * 
*/

class CartItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            name: 'Loading...',
            description: 'Loading...',
            base_price: 'Loading...',
            wood: 'Loading...',
            modifier: { 'Loading...': 0 },
            subtotal: 0
        }
    }

    componentDidMount = () => {
        fetch(`${process.env.REACT_APP_API}/sku/` + this.props.sku)
            .then(response => response.json())
            .then(item => {
                this.setState({
                    loading: false,
                    name: item.item.name,
                    description: item.item.description,
                    base_price: item.item.base_price,
                    wood: item.wood,
                    modifier: item.item.modifiers[item.modifier],
                    subtotal: item.item.base_price + item.item.modifiers[item.modifier].price
                });
            });
    }

    render() {
        return (
            <div className='cartItem'>
                {
                    this.state.loading
                        ?
                        <>
                            <Skeleton active paragraph={{ rows: 2 }} />
                            <Divider />
                        </>
                        :
                        <>
                            <Row>
                                <Col style={{ padding: '4px' }} span={10}><h3>{`${this.state.modifier.name} ${this.state.name} (${this.state.wood})`}</h3></Col>
                                <Col style={{ padding: '4px' }} span={3}><h3>{`$${this.state.subtotal}.00`}</h3></Col>
                                <Col style={{ padding: '4px' }} span={4}><RemoveItem sku={this.props.sku} /></Col>
                                <Col style={{ padding: '4px' }} span={3}><ChangeItemQuantity sku={this.props.sku} qty={this.props.qty} /></Col>
                                <Col style={{ padding: '4px' }} span={1}><h3>{`$${this.state.subtotal * this.props.qty}.00`}</h3></Col>
                            </Row>
                            <Divider />
                        </>
                }
            </div>
        );
    }
}

export default CartItem;