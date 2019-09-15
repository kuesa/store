import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import CurrentCart from './containers/CurrentCart';
import Navbar from './components/Navbar';

class App extends React.Component {
  render(){

    return(
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/cart' component={CurrentCart} />
      </Router>
    );
  }
}

export default App;
