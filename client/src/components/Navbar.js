import React from 'react';

import { Layout, Menu, Row, Col } from 'antd';

import { NavLink } from 'react-router-dom';

import UpdatedCartButton from '../containers/UpdatedCartButton';

import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <Layout id='navbar-layout'>
                <Layout.Header id='header'>
                    <Row>
                        <Col span={4} id='logo'>
                            <h1>Noah Grove</h1>
                        </Col>
                        <Col span={18}>
                            <Menu mode='horizontal' id='nav' defaultSelectedKeys={['prints']}>
                                <Menu.Item key='prints'><NavLink to='/prints'>Prints</NavLink></Menu.Item>
                                <Menu.Item key='pens'><NavLink to='/pens'>Pens</NavLink></Menu.Item>
                                <Menu.Item key='batons'><NavLink to='/batons'>Batons</NavLink></Menu.Item>
                                <Menu.Item key='about'><NavLink to='/about'>About</NavLink></Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={2} style={{ marginTop: '10px' }}>
                            <UpdatedCartButton />
                        </Col>
                    </Row>
                </Layout.Header>
            </Layout>
        );
    }
}

export default Navbar;