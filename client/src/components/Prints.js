import React from 'react';

import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'antd';

class Prints extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: true
        }
    }

    componentDidMount = () => {
        fetch(`${process.env.REACT_APP_API}/prints/`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: data.prints,
                    loading: false
                });
            });
    }

    render() {
        return (
            <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <Row gutter={16}>
                    {
                        this.state.items.map(item => (
                            <Col span={8} style={{ marginTop: 40 }} key={item.id}>
                                <Link to={`/prints/${item.id}`}>
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                                alt='Print'
                                                src={item.photos[0]}
                                            />
                                        }
                                    >
                                        <Card.Meta
                                            title={item.name}
                                            description='$20'
                                        />
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default Prints;