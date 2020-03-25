import React from 'react';

import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'antd';

class Home extends React.Component {
    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <Row gutter={16} >
                    <Col span={8} />
                    <Col span={4}>
                        <Link to='/pens/fountain'>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={
                                    <img
                                        alt='Pen'
                                        src='https://i.imgur.com/zQ0XWu3.jpg'
                                    />
                                }
                            >
                                <Card.Meta title="Fountain Pen" description="$40" />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to='/pens/rollerball'>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={
                                    <img
                                        alt='Pen'
                                        src='https://i.imgur.com/mB0jJyq.jpg'
                                    />
                                }
                            >
                                <Card.Meta title="Rollerball Pen" description="$35" />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8} />
                </Row>
            </div>
        );
    }
}

export default Home;