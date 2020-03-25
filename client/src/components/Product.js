import React from 'react';

import { Carousel, Skeleton, Select, Row, Col } from 'antd';
import AddItem from '../containers/AddItem';

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            name: "Loading...",
            description: "Loading...",
            base_price: 0,
            modifiers: [],
            wood_types: [],
            photos: [],
            selected_modifier: 0,
            selected_wood: 0,
            sku: this.props.productId + "00"
        }
    }

    componentDidMount = () => {
        fetch(`${process.env.REACT_APP_API}/items/` + this.props.productId)
            .then(response => response.json())
            .then(item => {
                this.setState({
                    loading: false,
                    name: item.item.name,
                    description: item.item.description,
                    base_price: item.item.base_price,
                    modifiers: item.item.modifiers,
                    wood_types: item.wood_types,
                    photos: item.item.photos
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

    handleChangeWood = e => {
        let new_sku = this.state.sku[0] + this.state.wood_types.indexOf(e) + this.state.sku[2];
        this.setState({
            selected_wood: e,
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
                        <Col span={7} />
                        <Col span={4}>
                            <Carousel style={{ width: '100%' }}>
                                {this.state.photos.map((photo) => <div key={this.state.photos.indexOf(photo)}><img src={photo} style={{ width: '100%' }} alt="Pen" /></div>)}
                            </Carousel>
                        </Col>
                        <Col span={2} />
                        <Col span={4}>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.description}</p>
                            <h3 style={{ marginTop: '60%' }}>{`$${this.state.base_price}`}</h3>
                            <Select onSelect={this.handleChangeWood} placeholder="Wood" style={{ width: 110 }}>
                                {this.state.wood_types.map((wood, idx) => <Select.Option key={idx} value={wood}>{wood}</Select.Option>)}
                            </Select>
                            <Select onSelect={this.handleChangeModifier} placeholder="Metal" style={{ width: 110, marginBottom: 12 }}>
                                <Select.Option value="0">Chrome</Select.Option>
                                <Select.Option value="1">Gold (+$5)</Select.Option>
                            </Select>
                            <AddItem sku={this.state.sku} />
                        </Col>
                        <Col span={7} />
                    </Row>
                </div>
        );
    }
}

export default Product;