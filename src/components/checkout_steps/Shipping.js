import React from 'react';

import { Form, Input } from 'antd';

class Shipping extends React.Component {
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
                    <Input name='State' />
                </Form.Item>
            </>
        );
    }
}

export default Shipping;