import React from 'react';

import { Result } from 'antd';

import { ClockCircleOutlined } from '@ant-design/icons';

class Batons extends React.Component {
    render() {
        return (
            <Result
                icon={<ClockCircleOutlined />}
                title='Coming Soon...'
                subTitle='Contact me if you are interested.'
            />
        );
    }
}

export default Batons;