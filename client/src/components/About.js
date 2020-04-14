import React from 'react';

import { Avatar, Row, Col, Typography, Button } from 'antd';

import { InstagramOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

class About extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Avatar
                            src='https://live.staticflickr.com/65535/49762215618_113eb431dd.jpg'
                            size={256}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center', marginTop: '1.17em' }}>
                        <Title>Hello!</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Paragraph>
                            My name is Noah Grove.
                        </Paragraph>
                        <Paragraph>
                            I am a Computer Science student at UC Davis,
                            <br />
                            and I made this website to showcase my work.
                        </Paragraph>
                        <Paragraph>
                            My lathe is the cheapest mini-lathe from
                            <br />
                            Harbor Freight, but it gets the job done.
                            <br />
                            I use carbide tools since I don't have
                            <br />
                            room for a bench grinder to sharpen HSS,
                            <br />
                            but I do prefer HSS tools (they're more fun).
                        </Paragraph>
                        <Paragraph>
                            I shoot with a Mamiya RB67, primarily with
                            <br />
                            Kodak Portra 400, but I occassionally
                            <br />
                            shoot with CineStill 800T.
                            <br />
                            I prefer my personal work to not have
                            <br />
                            people in it, but I will shoot portraiture
                            <br />
                            if it feels like it makes sense with my style.
                        </Paragraph>
                        <Paragraph>
                            I produce music, under the name "Kuesa",
                            <br />
                            and you can find my work on all major platforms.
                            <br />
                            My style is chiptune-forward. I write mostly in
                            <br />
                            Renoise, FamiTracker, and sometimes FL Studio.
                        </Paragraph>
                        <Paragraph>
                            I primarily play English Horn.
                            <br />
                            I also play Clarinet and Banjo, and
                            <br />
                            a few other instruments.
                        </Paragraph>
                    </Col>
                </Row>
                <Row>
                    <Col span={9} />
                    <Col span={2} style={{ textAlign: 'center' }}>
                        <a href='https://www.instagram.com/kuesasan/'>
                            <Title>
                                <InstagramOutlined />
                            </Title>
                        </a>
                    </Col>
                    <Col span={2} style={{ textAlign: 'center' }}>
                        <a href='https://github.com/kuesa'>
                            <Title>
                                <GithubOutlined />
                            </Title>
                        </a>
                    </Col>
                    <Col span={2} style={{ textAlign: 'center' }}>
                        <a href='https://www.linkedin.com/in/noah-grove-605a35157/'>
                            <Title>
                                <LinkedinOutlined />
                            </Title>
                        </a>
                    </Col>
                    <Col span={9} />
                </Row>
            </>
        );
    }
}

export default About;