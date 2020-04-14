import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Prints from './components/Prints';
import CurrentCart from './containers/CurrentCart';
import Navbar from './components/Navbar';
import Pens from './components/Pens';
import Product from './components/Product';
import CurrentCheckout from './containers/CurrentCheckout';
import Batons from './components/Batons';
import NotFound from './components/NotFound';
import About from './components/About';

class App extends React.Component {
  render() {

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Prints} />
          <Route path='/cart' component={CurrentCart} />
          <Route path='/pens' exact component={Pens} />
          <Route path='/pens/fountain'><Product productId={1} /></Route>
          <Route path='/pens/rollerball'><Product productId={2} /></Route>
          <Route path='/prints' exact component={Prints} />
          <Route path='/prints/:id'><Product productId={9} /></Route>
          <Route path='/batons' component={Batons} />
          <Route path='/about' component={About} />
          <Route path='/checkout' component={CurrentCheckout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
