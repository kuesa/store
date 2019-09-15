import React from 'react';
import { connect } from 'react-redux';
import { changeQuantity, removeItem } from '../actions/actions';

import { InputNumber } from 'antd';

let ChangeItemQuantity = (props) => {
    return(
        <div>
            <InputNumber min={0} value={props.qty} onChange={ value => {
                if(value > 0) {
                    props.dispatch(changeQuantity(props.sku, value));
                } else {
                    props.dispatch(removeItem(props.sku));
                }
            }}
            />
        </div>
    );
}

ChangeItemQuantity = connect()(ChangeItemQuantity);

export default ChangeItemQuantity;