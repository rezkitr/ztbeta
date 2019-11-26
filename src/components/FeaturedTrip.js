import React, { Component } from 'react';
import Title from '../components/Title';
import TripCard from '../components/TripCard';
import { Link } from 'react-router-dom';

export default class FeaturedTrip extends Component {
  render() {
    return (
      <div className="container featured-sec">
        <Title title="Open Trip" subtitle="Liburan nyaman, pulang bawa teman!" />

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

        <div className="row justify-content-center">
          <Link to="/opentrip">
            <button className="btn btn-sm btn-yellow">LAINNYA</button>
          </Link>
        </div>

      </div>
    )
  }
}
