import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';

import { Button } from 'antd';

let AddItem = (props) => {
    return (
        <div>
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    props.dispatch(addItem(props.sku, 1));
                }}
            >
                <Button type="primary" htmlType="submit">Add To Cart</Button>
            </form>
        </div>
    );
}

AddItem = connect()(AddItem);

export default AddItem;