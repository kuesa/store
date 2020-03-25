import React from 'react';
import { withRouter } from 'react-router-dom';
import { Badge, Button, Icon } from 'antd';

class CartButton extends React.Component {

    handleClick = () => {
        this.props.history.push('/cart');
    }

    render() {

        return (
            <Badge count={this.props.itemCount}>
                <Button
                    type="primary"
                    shape="round"
                    onClick={this.handleClick}
                >
                    <Icon type="shopping-cart" />
                    Cart
                </Button>
            </Badge>
        );
    }
}

export default withRouter(CartButton);