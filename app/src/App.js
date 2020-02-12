import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home server={this.props.server} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
