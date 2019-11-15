import React from 'react';

import { CardElement } from 'react-stripe-elements';

class Billing extends React.Component {
    render() {
        return (
            <CardElement />
        );
    }
}

export default Billing;