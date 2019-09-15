import React from 'react';

import { Layout, Menu, Row, Col } from 'antd';

import { Link } from 'react-router-dom';

import UpdatedCartButton from '../containers/UpdatedCartButton';

import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return(
            <Layout id="navbar-layout">
                <Layout.Header id="header">
                    <Row>
                        <Col span={4}>
                            <h1><Link to="/">Noah Grove</Link></h1>
                        </Col>
                        <Col span={18}>
                            <Menu mode="horizontal" id="nav">
                                <Menu.Item>Pens</Menu.Item>
                                <Menu.Item>Batons</Menu.Item>
                                <Menu.Item>Oboes</Menu.Item>
                                <Menu.Item>About</Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={2}>
                            <UpdatedCartButton />
                        </Col>
                    </Row>
                </Layout.Header>
            </Layout>
        );
    }
}

export default Navbar;