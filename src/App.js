import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import CurrentCart from './containers/CurrentCart';
import Navbar from './components/Navbar';
import Pens from './components/Pens';
import Product from './components/Product';
import CurrentCheckout from './containers/CurrentCheckout';

class App extends React.Component {
  render() {

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={CurrentCart} />
          <Route path='/pens' exact component={Pens} />
          <Route path='/pens/fountain'><Product productId={1} /></Route>
          <Route path='/pens/rollerball'><Product productId={2} /></Route>
          <Route path='/checkout' component={CurrentCheckout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
