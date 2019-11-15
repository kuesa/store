import React from 'react';

import { Form, Input } from 'antd';

class Shipping extends React.Component {
    render() {



        return (
            <Form.Item label='Name'>
                <Input name='name' />
            </Form.Item>
        );
    }
}

export default Shipping;