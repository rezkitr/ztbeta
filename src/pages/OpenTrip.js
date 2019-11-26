import React, { Component } from 'react';

import FilterBar from '../components/FilterBar';
import TripList from '../components/TripList';


export default class OpenTrip extends Component {
  render() {
    return (
      <div id="opentrip-page">
        <FilterBar />
        <TripList />
      </div>
    )
  }
}
