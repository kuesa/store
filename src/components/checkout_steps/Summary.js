import React from 'react';

import SummaryItem from './SummaryItem';

class Summary extends React.Component {
    

    render() {
        return (
            <>
                {this.props.items.map(item => (<SummaryItem sku={item.sku} qty={item.qty} />))}
            </>
        );
    }
}

export default Summary;