import { ADD_ITEM, REMOVE_ITEM, CHANGE_QUANTITY, REMOVE_ALL } from './actionTypes';

export function addItem(sku, qty) {
    return {
        type: ADD_ITEM,
        sku,
        qty
    };
}

export function removeItem(sku) {
    return {
        type: REMOVE_ITEM,
        sku
    };
}

export function changeQuantity(sku, qty) {
    return {
        type: CHANGE_QUANTITY,
        sku,
        qty
    };
}

export function removeAll() {
    return { type: REMOVE_ALL };
}