import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoriesComp from './categories-component'
import ItemsListing from './items-listing-comp';

class App extends Component {
	render() {
		return (
			<Router>
      <div>
        <Route exact path="/" component={CategoriesComp} />
        <Route path="/:id" component={ItemsListing} />
      </div>
    </Router>
		);
	}
}

export default App;
