import React from 'react';

import { Divider, Typography, Row, Col } from 'antd';

import SummaryItem from './SummaryItem';

const { Title, Text } = Typography;

class Summary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 5
        };
    }

    addToTotal = amt => {
        this.setState({
            total: this.state.total + amt
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'right' }}>
                {this.props.items.map(item => (<SummaryItem key={item.sku}
                    sku={item.sku} qty={item.qty} addFunc={this.addToTotal} />))}
                <Row justify='end' gutter={32}>
                    <Col>
                        <Title level={4}>{`Shipping:`}</Title>
                    </Col>
                    <Col>
                        <Title level={4}>
                            <Text strong>{`$5.00`}</Text>
                        </Title>
                    </Col>
                </Row>
                <Divider />
                <Row justify='end' gutter={32}>
                    <Col>
                        <Title level={4}>{`Total:`}</Title>
                    </Col>
                    <Col>
                        <Title level={4} >
                            <Text strong>{`$${this.state.total}.00`}</Text>
                        </Title>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Summary;