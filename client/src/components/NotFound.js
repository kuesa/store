import React from 'react';

import { Result } from 'antd';

class NotFound extends React.Component {
    render() {
        return (
            <Result
                status='404'
                title='404'
                subTitle="You're in the wrong neck of the woods, pardner... Best go back to where you came from..."
            />
        );
    }
}

export default NotFound;