import React, { Component } from 'react';
import Title from '../components/Title';
import TripCard from '../components/TripCard';

export default class FavouriteTrip extends Component {
  render() {
    return (
      <div className="container favourite-sec" >
        <Title title="Destinasi Favorit" subtitle="Tidak pernah mengecewakan!" />

        <div className="row">
          <div className="col-md">
            <TripCard />
          </div>
          <div className="col-md">
            <TripCard />
          </div>
          <div className="col-md">
            <TripCard />
          </div>
          <div className="col-md">
            <TripCard />
          </div>
        </div>

      </div>
    )
  }
}
