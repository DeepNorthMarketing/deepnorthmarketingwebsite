import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/services' exact><Services /></Route>
          <Route path='/careers' exact><Careers /></Route>
          <Route path='/contact' exact><Contact /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
