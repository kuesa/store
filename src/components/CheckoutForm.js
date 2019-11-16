import React from 'react';
import { injectStripe } from 'react-stripe-elements';

import { Row, Col, Steps, Button, Form } from 'antd';

import Shipping from './checkout_steps/Shipping';
import Billing from './checkout_steps/Billing';
import Summary from './checkout_steps/Summary';

import './CheckoutForm.css';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            purchase_complete: false,
            current: 0,
            items: [...this.props.items.map(item => item.sku)]
        };

        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        ev.preventDefault();

        let target = ev.target;

        let { token } = await this.props.stripe.createToken({ name: target.name.value });

        let resp_body = {
            token: token.id,
            name: target.name.value,
            items: this.state.items
        }

        let response = await fetch('/charge', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(resp_body)
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
        const steps = [
            {
                title: 'Shipping',
                content: <Shipping />
            },
            {
                title: 'Billing',
                content: <Billing />
            },
            {
                title: 'Confirm',
                content: <Summary items={this.props.items} />
            }
        ]

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (
            <>
                <Row>
                    <Col span={8} />
                    <Col span={8}>
                        <h1>Checkout</h1>
                        <div style={{ margin: '40px 12.5% 50px', textAlign: 'center' }}>
                            <Steps current={this.state.current}>
                                {
                                    steps.map(item => {
                                        return (
                                            <Steps.Step key={item.title} title={item.title} />
                                        )
                                    })
                                }
                            </Steps>
                            <Form {...formItemLayout} onSubmit={this.submit}>
                                <div className="steps-content" style={{ margin: '40px 0' }}>
                                    {steps.map(({ title, content }, i) => (
                                        <div
                                            key={title}
                                            className={i === this.state.current ? 'form-cont fade-in' : 'form-cont'}
                                        >
                                            {content}
                                        </div>
                                    ))
                                    }
                                </div>
                                <div className="steps-action">
                                    {this.state.current < steps.length - 1 && (
                                        <Button type="primary" onClick={() => this.next()}>
                                            Next
                                        </Button>
                                    )}
                                    {this.state.current === steps.length - 1 && (
                                        <Button type="primary" htmlType="submit">
                                            Place Order
                                        </Button>
                                    )}
                                    {this.state.current > 0 && (
                                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                            Previous
                                        </Button>
                                    )}
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col span={8} />
                </Row>
            </>
        );
    }
}

export default injectStripe(CheckoutForm);