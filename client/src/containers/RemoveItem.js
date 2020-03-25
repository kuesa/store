import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/actions';

import { Button } from 'antd';

let RemoveItem = (props) => {
    return (
        <div>
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    props.dispatch(removeItem(props.sku));
                }}
            >
                <Button type="primary" htmlType="submit">Remove Item</Button>
            </form>
        </div>
    );
}

RemoveItem = connect()(RemoveItem);

export default RemoveItem;