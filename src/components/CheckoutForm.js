import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import { Row, Col, Steps, Button } from 'antd';

import './CheckoutForm.css';

const steps = [
    {
        title: 'Shipping',
        content: 'Shipping Address'
    },
    {
        title: 'Billing',
        content: 'Billing Address'
    },
    {
        title: 'Confirm',
        content: 'Confirm your Order'
    }
]

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            purchase_complete: false,
            current: 0
        };

        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        ev.preventDefault();

        let { token } = await this.props.stripe.createToken({ name: "Noah Grove" });
        let response = await fetch('/charge', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: token.id
        });

        if (response.ok) {
            this.setState({
                purchaseComplete: true
            });
        }

    }

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current })
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={8} />
                    <Col span={8}>
                        <h1>Checkout</h1>
                        <Steps current={this.state.current}>
                            {
                                steps.map(item => {
                                    return (
                                        <Steps.Step key={item.title} title={item.title} />
                                    )
                                })
                            }
                        </Steps>
                        <CardElement />
                    </Col>
                    <Col span={8} />
                </Row>
            </>
        );
    }
}

export default injectStripe(CheckoutForm);