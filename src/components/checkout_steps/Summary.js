import React from 'react';

import { Divider, Typography } from 'antd';

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
                {this.props.items.map(item => (<SummaryItem key={item.sku} sku={item.sku} qty={item.qty} addFunc={this.addToTotal} />))}
                <p />
                <Title level={4} style={{ display: 'inline-block', marginRight: '1.5rem' }}>{`Shipping:`}</Title>
                <Title level={4} style={{ display: 'inline-block' }}>
                    <Text strong>{`$5.00`}</Text>
                </Title>
                <Divider />
                <Title level={4} style={{ display: 'inline-block', marginRight: '1.5rem' }}>{`Total:`}</Title>
                <Title level={4} style={{ display: 'inline-block' }}>
                    <Text strong>{`$${this.state.total}.00`}</Text>
                </Title>
            </div>
        );
    }
}

export default Summary;