import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const mapStateToProps = state => {
    return {
        items: state.cartItems
    };
}

const CurrentCheckout = connect(mapStateToProps)(Checkout);

export default CurrentCheckout;