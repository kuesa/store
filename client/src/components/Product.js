import React from 'react';
import { withRouter } from 'react-router-dom';

import { Carousel, Skeleton, Select, Row, Col } from 'antd';
import AddItem from '../containers/AddItem';

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            name: 'Loading...',
            description: 'Loading...',
            base_price: 0,
            modifiers: [],
            types: [],
            typeName: '',
            photos: [],
            selected_modifier: 0,
            selected_type: 0,
            sku: this.props.productId + '00'
        }
    }

    componentDidMount = () => {
        let product = this.props.productId;
        if (this.props.match.params.id) {
            product = Number(product.toString() + this.props.match.params.id);
            this.setState({ sku: '9' + this.state.selected_type + this.props.match.params.id });
        }
        fetch(`${process.env.REACT_APP_API}/items/` + product)
            .then(response => response.json())
            .then(item => {
                this.setState({
                    loading: false,
                    name: item.item.name,
                    description: item.item.description,
                    base_price: item.item.base_price,
                    modifiers: item.item.modifiers,
                    types: item.types,
                    photos: item.item.photos,
                    typeName: item.typeName
                });
            });
    }

    handleChangeModifier = e => {
        let new_sku = this.state.sku[0] + this.state.sku[1] + e;
        this.setState({
            selected_modifier: e,
            sku: new_sku
        });
    }

    handleChangeType = e => {
        let new_sku = this.state.sku[0] + this.state.types.indexOf(e) + this.state.sku.substr(2);
        this.setState({
            selected_type: e,
            sku: new_sku
        });
    }

    render() {
        return (
            this.state.loading ?
                <div style={{ marginTop: 40 }}>
                    <Row>
                        <Col span={8} />
                        <Col span={8}>
                            <Skeleton />
                        </Col>
                        <Col span={8} />
                    </Row>
                </div>
                :
                <div style={{ marginTop: 40 }}>
                    <Row>
                        <Col span={4} />
                        <Col span={7}>
                            <Carousel style={{ width: '100%' }}>
                                {this.state.photos.map((photo) => <div key={this.state.photos.indexOf(photo)}><img src={photo} style={{ width: '100%' }} alt='Product' /></div>)}
                            </Carousel>
                        </Col>
                        <Col span={2} />
                        <Col span={4}>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.description}</p>
                            <h3 style={{ marginTop: '60%' }}>{`$${this.state.base_price}`}</h3>
                            <Select onSelect={this.handleChangeType} placeholder={this.state.typeName} style={{ width: 110, marginBottom: 12 }}>
                                {this.state.types.map((type, idx) => <Select.Option key={idx} value={type}>{type}</Select.Option>)}
                            </Select>
                            {
                                this.state.typeName === 'Wood' ?
                                    <Select onSelect={this.handleChangeModifier} placeholder='Metal' style={{ width: 110, marginBottom: 12 }}>
                                        <Select.Option value='0'>Chrome</Select.Option>
                                        <Select.Option value='1'>Gold (+$5)</Select.Option>
                                    </Select> :
                                    null
                            }
                            <AddItem sku={this.state.sku} />
                        </Col>
                        <Col span={7} />
                    </Row>
                </div>
        );
    }
}

export default withRouter(Product);