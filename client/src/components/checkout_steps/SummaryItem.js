import React from 'react';

import { Typography } from 'antd';

const { Title, Text } = Typography;

class SummaryItem extends React.Component {
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

                this.props.addFunc(item.item.base_price + item.item.modifiers[item.modifier].price);
            });
    }

    render() {
        return (
            <>
                <Title level={4} style={{ display: 'inline-block', marginRight: '1.5rem' }}>{`${this.props.qty}x ${this.state.modifier.name} ${this.state.name} (${this.state.wood}):`}</Title>
                <Title level={4} style={{ display: 'inline-block' }}>
                    <Text strong>{`$${this.state.subtotal}.00`}</Text>
                </Title>
            </>
        );
    }
}

export default SummaryItem;