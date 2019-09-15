import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = state => {
    return {
        items: state.cartItems
    };
}

const CurrentCart = connect(mapStateToProps)(Cart);

export default CurrentCart;