import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

// don't worry - this is a public API key.
class Checkout extends React.Component {
    render() {
        return (
            <StripeProvider apiKey='pk_test_H11hfDxxxCmMMMQWwDGV7bXy00wOk4eBK3'>
                <>
                    <Elements>
                        <CheckoutForm items={this.props.items} />
                    </Elements>
                </>
            </StripeProvider>
        );
    }
}

export default Checkout;
