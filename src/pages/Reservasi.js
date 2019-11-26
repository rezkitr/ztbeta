import React, { Component } from 'react';
import FormReservasi from '../components/FormReservasi';

export default class Reservasi extends Component {
  render() {
    return (
      <div className="container" id="rsv-page">
        <FormReservasi />
      </div>
    )
  }
}
