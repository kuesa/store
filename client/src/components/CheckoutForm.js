import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Row, Col, Steps, Button, Form, Result, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAll } from '../actions/actions';

import Shipping from './checkout_steps/Shipping';
import Billing from './checkout_steps/Billing';
import Summary from './checkout_steps/Summary';

import './CheckoutForm.css';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseComplete: false,
            loading: false,
            current: 0,
            items: [...this.props.items.map(item => item.sku)],
            secret: '',
            error: false,
            errorMsg: ''
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount = () => {
        fetch(`${process.env.REACT_APP_API}/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ items: this.props.items })
        }).then(response => response.json())
            .then(data => {
                this.setState({ secret: data.secret })
            })
            .catch(err => console.error(err));
    }

    async submit(ev) {
        let values = ev;

        this.setState({ loading: true });

        const { stripe, elements } = this.props;

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            this.state.secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    address: {
                        city: values.bill_city ? values.bill_city : values.city,
                        country: 'US',
                        line1: values.bill_address1 ? values.bill_address1 : values.address1,
                        line2: values.bill_address2 ? values.bill_address2 : values.address2,
                        postal_code: values.bill_zip ? values.bill_zip : values.zip,
                        state: values.bill_state ? values.bill_state : values.state
                    },
                    email: values.bill_email ? values.bill_email : values.email,
                    name: values.bill_name ? values.bill_name : values.name
                }
            },
            shipping: {
                address: {
                    city: values.city,
                    country: 'US',
                    line1: values.address1,
                    line2: values.address2,
                    postal_code: values.zip,
                    state: values.state
                },
                name: values.name
            }
        });

        if (error) {
            console.log('[error]', error);
            this.setState({ error: true, loading: false, errorMsg: error.message });
        } else {
            if (paymentIntent.status === 'succeeded') {
                // clear cart
                this.props.dispatch(removeAll());
                // set complete state to true
                this.setState({ purchaseComplete: true, loading: false });
            }
        };
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
        const { stripe } = this.props;

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
                {this.state.purchaseComplete === false &&
                    this.state.error === false ?
                    <Row>
                        <Col span={8} />
                        <Col span={8}>
                            <h1>Checkout</h1>
                            <div style={{ margin: '40px 12.5% 50px', textAlign: 'center' }}>
                                <Spin
                                    spinning={this.state.loading} tip='Processing...'>
                                    <Steps current={this.state.current}>
                                        {
                                            steps.map(item => {
                                                return (
                                                    <Steps.Step key={item.title} title={item.title} />
                                                )
                                            })
                                        }
                                    </Steps>
                                    <Form
                                        {...formItemLayout}
                                        onFinish={this.submit}
                                    >
                                        <div className='steps-content' style={{ margin: '40px 0' }}>
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
                                        <div className='steps-action'>
                                            {this.state.current < steps.length - 1 && (
                                                <Button type='primary' onClick={() => this.next()}>
                                                    Next
                                                </Button>
                                            )}
                                            {this.state.current === steps.length - 1 && (
                                                <Button
                                                    type='primary'
                                                    htmlType='submit'
                                                    disabled={!stripe}
                                                >
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
                                </Spin>
                            </div>
                        </Col>
                        <Col span={8} />
                    </Row>
                    : null
                }
                {this.state.purchaseComplete && !this.state.loading ?
                    <Result
                        status='success'
                        title='Purchase Complete!'
                        subTitle='You will receive a personal email once your order enters production.'
                        extra={
                            <Button
                                onClick={() => this.props.history.push('/')}>
                                Back
                            </Button>
                        }
                    /> : null
                }
                {this.state.error && !this.state.loading ?
                    <Result
                        status='error'
                        title='Purchase Failed.'
                        subTitle={this.state.errorMsg}
                        extra={
                            <Button
                                onClick={() => this.props.history.push('/')}>
                                Back
                            </Button>
                        }
                    /> : null
                }
            </>
        );
    }
}

CheckoutForm = connect()(CheckoutForm);

export default withRouter(CheckoutForm);