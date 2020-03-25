import React from 'react';

import { Form, Input, Select } from 'antd';

const { Option } = Select;

class Shipping extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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

    handleSelect = value => {
        this.setState({
            selected_state: value
        });
    }

    render() {

        return (
            <>
                <Form.Item
                    label='Name'
                    name='name'
                    rules={[{ required: true, message: 'Name is required' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Email'
                    name='email'
                    rules={[{ required: true, message: 'Email is required' }]}
                >
                    <Input type='email' />
                </Form.Item>
                <Form.Item
                    label='Address'
                    name='address1'
                    rules={[{ required: true, message: 'Address is required' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Apt/Suite/Room'
                    name='address2'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='City'
                    name='city'
                    rules={[{ required: true, message: 'City is required' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='State'
                    name='state'
                    rules={[{ required: true, message: 'State is required' }]}
                >
                    <Select placeholder='Select state'>
                        {
                            this.state.states.map(item => (<Option key={item} value={item}>{item}</Option>))
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    label='ZIP Code'
                    name='zip'
                    rules={[{ required: true, message: 'ZIP is required' }]}
                >
                    <Input />
                </Form.Item>
            </>
        );
    }
}

export default Shipping;