import React from 'react';

import { CardElement } from 'react-stripe-elements';

import { Form, Input, Checkbox } from 'antd';

import './Billing.css';

class Billing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sameShip: true
        };
    }

    handleToggle = () => {
        this.setState({sameShip: !this.state.sameShip});
    }

    render() {
        return (
            <>
                <Checkbox onChange={this.handleToggle} style={{marginBottom: '20px'}}>Same as Shipping</Checkbox>

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
                        <Input name='bill_state' />
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