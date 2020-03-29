import React from 'react';

import { Typography, Row, Col } from 'antd';

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
                    subtotal: (item.item.base_price + item.item.modifiers[item.modifier].price) * this.props.qty
                });

                this.props.addFunc((item.item.base_price + item.item.modifiers[item.modifier].price) * this.props.qty);
            });
    }

    render() {
        return (
            <Row justify='end' gutter={32} align='middle'>
                <Col>
                    <Title level={4} style={{ display: 'inline-block', marginRight: '5%' }}>{`${this.props.qty}x ${this.state.modifier.name} ${this.state.name} (${this.state.wood}):`}</Title>
                </Col>
                <Col>
                    <Title level={4} style={{ display: 'inline-block' }}>
                        <Text strong>{`$${this.state.subtotal}.00`}</Text>
                    </Title>
                </Col>
            </Row>
        );
    }
}

export default SummaryItem;