import { connect } from 'react-redux';
import CartButton from '../components/CartButton';

const mapStateToProps = state => {
    let items = 0;

    for ( let i in state.cartItems) {
        items += state.cartItems[i].qty;
    }
    return {
        itemCount: items
    };
}

const UpdatedCartButton = connect(mapStateToProps)(CartButton);

export default UpdatedCartButton;