import React from 'react';

import { CardElement } from 'react-stripe-elements';

import { Form, Input, Checkbox, Select } from 'antd';

import './Billing.css';

const { Option } = Select;

class Billing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sameShip: true,
            selected_state: 'California',
            states: []
        };
    }

    componentDidMount = () => {
        fetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json')
            .then(response => response.json())
            .then(item => {
                let state_list = item.map(item => item.name);

                this.setState({
                    states: state_list
                });
            });
    }

    handleToggle = () => {
        this.setState({ sameShip: !this.state.sameShip });
    }

    handleSelect = value => {
        this.setState({
            selected_state: value
        });
    }

    render() {
        return (
            <>
                <Checkbox onChange={this.handleToggle} style={{ marginBottom: '20px' }}>Same as Shipping</Checkbox>

                <div className={this.state.sameShip ? 'bill-addr fade-in' : 'bill-addr'}>
                    <Form.Item label='Name'>
                        <Input name='bill_name' />
                    </Form.Item>
                    <Form.Item label='Address'>
                        <Input name='bill_address1' />
                    </Form.Item>
                    <Form.Item label='Apt/Suite/Room'>
                        <Input name='bill_address2' />
                    </Form.Item>
                    <Form.Item label='City'>
                        <Input name='bill_city' />
                    </Form.Item>
                    <Form.Item label='State'>
                        <Select defaultValue='California' onChange={this.handleSelect}>
                            {
                                this.state.states.map(item => (<Option key={item} value={item}>{item}</Option>))
                            }
                        </Select>
                    </Form.Item>
                </div>
                <div className='card-info' style={{ width: '75%', alignContent: 'center', display: 'inline-block' }}>
                    <CardElement />
                </div>
            </>
        );
    }
}

export default Billing;