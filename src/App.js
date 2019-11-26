import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OpenTrip from './pages/OpenTrip';
import DetailTrip from './pages/DetailTrip';
import Reservasi from './pages/Reservasi';
import Completed from './pages/Completed';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/opentrip" exact strict component={OpenTrip} />
          <Route path="/opentrip/detail/:id" exact strict component={DetailTrip} />
          <Route path="/opentrip/reservasi/:id" exact strict component={Reservasi} />
          <Route path="/completed" exact strict component={Completed} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
