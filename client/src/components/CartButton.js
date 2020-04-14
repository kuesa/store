import React from 'react';
import { withRouter } from 'react-router-dom';
import { Badge, Button } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons';

class CartButton extends React.Component {

    handleClick = () => {
        this.props.history.push('/cart');
    }

    render() {

        return (
            <Badge count={this.props.itemCount}>
                <Button
                    type='primary'
                    shape='round'
                    onClick={this.handleClick}
                >
                    <ShoppingCartOutlined />
                    Cart
                </Button>
            </Badge>
        );
    }
}

export default withRouter(CartButton);