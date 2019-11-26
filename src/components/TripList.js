import React, { Component } from 'react';
import TripCard from '../components/TripCard';

export default class TripList extends Component {
  render() {
    return (
      <div className="container trip-list">
        <div className="row">
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
          <div className="col-md-3">
            <TripCard />
          </div>
        </div>
      </div>
    )
  }
}
