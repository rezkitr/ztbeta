import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import TabMenu from '../components/TabMenu';

export default class DetailTrip extends Component {
  render() {
    return (
      <div id="detail-page">
        <Banner />
        <TabMenu />
        <div className="container">
          <Link to="/opentrip/reservasi/123" className="btn btn-light-green" style={{ fontWeight: "700" }} >RESERVASI<i className="fas fa-plane-departure ml-3"></i></Link>
        </div>
      </div>
    )
  }
}
