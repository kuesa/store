import React from 'react';
import AddItem from '../containers/AddItem';

class Home extends React.Component {
    render(){
        return(
            <>
                <h1>Hello, World! (Home)</h1>
                <AddItem sku={1} />
                <br />
                <AddItem sku={2} />
                <br />
                <AddItem sku={3} />
            </>
        );
    }
}

export default Home;