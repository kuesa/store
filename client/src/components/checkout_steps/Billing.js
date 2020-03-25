import React from 'react';

import { CardElement } from '@stripe/react-stripe-js';

import { Form, Input, Checkbox, Select } from 'antd';

import './Billing.css';

const { Option } = Select;

class Billing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sameShip: false,
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

                <div className={!this.state.sameShip ? 'bill-addr fade-in' : 'bill-addr'}>
                    <Form.Item
                        label='Name'
                        name='bill_name'
                        rules={[{
                            required: !this.state.sameShip,
                            message: 'Name is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Email'
                        name='bill_email'
                        rules={[{
                            required: !this.state.sameShip,
                            message: 'Email is required'
                        }]}
                    >
                        <Input type='email' />
                    </Form.Item>
                    <Form.Item
                        label='Address'
                        name='bill_address1'
                        rules={[{
                            required: !this.state.sameShip,
                            message: 'Address is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Apt/Suite/Room'
                        name='bill_address2'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='City'
                        name='bill_city'
                        rules={[{
                            required: !this.state.sameShip,
                            message: 'City is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='State'
                        name='bill_state'
                        rules={[{
                            required: !this.state.sameShip,
                            message: 'State is required'
                        }]}
                    >
                        <Select placeholder='Select state'>
                            {
                                this.state.states.map(item => (<Option key={item} value={item}>{item}</Option>))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label='ZIP Code'
                        name='bill_zip'
                        rules={[{
                            required: !this.state.sameShip,
                            message: 'ZIP is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <Form.Item
                    label='Payment'
                    name='payment'
                    rules={[{
                        required: true,
                        message: 'Payment is required'
                    }]}
                >
                    <CardElement />
                </Form.Item>
            </>
        );
    }
}

export default Billing;