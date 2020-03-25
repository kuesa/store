import React from 'react';
import AddItem from '../containers/AddItem';

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Hello, World! (Home)</h1>
                <AddItem sku={120} />
                <br />
                <AddItem sku={101} />
                <br />
                <AddItem sku={220} />
            </>
        );
    }
}

export default Home;