import React from 'react';

class SummaryItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            name: 'Loading...',
            description: 'Loading...',
            base_price: 'Loading...',
            wood: 'Loading...',
            modifier: { 'Loading...': 0 },
            subtotal: 0
        }
    }
    
    componentDidMount = () => {
        fetch('/sku/' + this.props.sku)
            .then(response => response.json())
            .then(item => {
                this.setState({
                    loading: false,
                    name: item.item.name,
                    description: item.item.description,
                    base_price: item.item.base_price,
                    wood: item.wood,
                    modifier: item.item.modifiers[item.modifier],
                    subtotal: item.item.base_price + item.item.modifiers[item.modifier].price
                });
            });
    }

    render() {
        return(
            <h2>{`${this.props.qty}x ${this.state.modifier.name} ${this.state.name} (${this.state.wood})`}</h2>
        );
    }
}

export default SummaryItem;