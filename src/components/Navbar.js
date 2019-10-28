import React from 'react';

import { Layout, Menu, Row, Col } from 'antd';

import { NavLink } from 'react-router-dom';

import UpdatedCartButton from '../containers/UpdatedCartButton';

import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <Layout id="navbar-layout">
                <Layout.Header id="header">
                    <Row>
                        <Col span={4} id="logo">
                            <h1>Noah Grove</h1>
                        </Col>
                        <Col span={18}>
                            <Menu mode="horizontal" id="nav">
                                <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
                                <Menu.Item><NavLink to="/pens">Pens</NavLink></Menu.Item>
                                <Menu.Item><NavLink to="/batons">Batons</NavLink></Menu.Item>
                                <Menu.Item><NavLink to="/oboes">Oboes</NavLink></Menu.Item>
                                <Menu.Item><NavLink to="/about">About</NavLink></Menu.Item>
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