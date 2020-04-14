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
            printName: '',
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
                    printName: item.printName,
                    modifier: item.item.modifiers ? item.item.modifiers[item.modifier] : { name: '' },
                    subtotal: item.item.base_price + (item.item.modifiers ? item.item.modifiers[item.modifier].price : 0)
                });

                this.props.addFunc((item.item.base_price + item.item.modifiers[item.modifier].price) * this.props.qty);
            });
    }

    render() {
        return (
            <Row gutter={32} justify='end'>
                <Col style={{ maxWidth: '70%' }}>
                    <Title level={4} span={8}>{`${this.props.qty}x ${this.state.modifier.name} ${this.state.name} ${this.state.wood ? '(' + this.state.wood + ')' : ''}${this.state.printName ? '(' + this.state.printName + ')' : ''}`}</Title>
                </Col>
                <Col>
                    <Title level={4} span={4}>
                        <Text strong>{`$${this.state.subtotal}.00`}</Text>
                    </Title>
                </Col>
            </Row>
        );
    }
}

export default SummaryItem;