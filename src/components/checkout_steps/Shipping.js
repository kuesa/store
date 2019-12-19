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
                <Form.Item label='Name'>
                    <Input name='name' />
                </Form.Item>
                <Form.Item label='Address'>
                    <Input name='address1' />
                </Form.Item>
                <Form.Item label='Apt/Suite/Room'>
                    <Input name='address2' />
                </Form.Item>
                <Form.Item label='City'>
                    <Input name='city' />
                </Form.Item>
                <Form.Item label='State'>
                    <Select defaultValue='California' onChange={this.handleSelect}>
                        {
                            this.state.states.map(item => (<Option key={item} value={item}>{item}</Option>))
                        }
                    </Select>
                </Form.Item>
            </>
        );
    }
}

export default Shipping;