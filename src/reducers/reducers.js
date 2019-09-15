import { ADD_ITEM, REMOVE_ITEM, CHANGE_QUANTITY } from '../actions/actionTypes';

export function cartItems(state = [], action){
    switch(action.type){
        case ADD_ITEM:
            let found = false;
            let data = state.map((item) => {
                if (item.sku === action.sku) {
                    found = true;
                    return {
                        sku: action.sku,
                        qty: item.qty + 1
                    }
                }
                return item;
            });

            return found ? data : [...state, {sku: action.sku, qty: action.qty}];

        case REMOVE_ITEM:
            return state.filter((item) => {
                return(item.sku !== action.sku);
            });

        case CHANGE_QUANTITY:
            return state.map((item) => {
                if(item.sku === action.sku) {
                    return Object.assign({}, item, {
                        qty: action.qty
                    });
                }
                return item;
            });
        default:
            return state;
    }
}