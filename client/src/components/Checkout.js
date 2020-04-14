import React from 'react';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// don't worry - this is a public API key.
const stripePromise = loadStripe('pk_live_iryttCVg5Yi3eiJrcm7QuUyc00LOkZLI8l');

class Checkout extends React.Component {
    render() {
        return (
            <>
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ stripe, elements }) => (
                            <CheckoutForm
                                items={this.props.items}
                                stripe={stripe}
                                elements={elements}
                            />
                        )}
                    </ElementsConsumer>
                </Elements>
            </>
        );
    }
}

export default Checkout;
