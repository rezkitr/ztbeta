import React, { Component } from 'react';

export default class TabMenu extends Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
              aria-selected="true"><i class="far fa-list-alt mr-2"></i>Itinerary</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
              aria-selected="false"><i className="fas fa-couch mr-2"></i>Fasilitas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
              aria-selected="false"><i className="fas fa-exclamation-triangle mr-2"></i>Syarat & Ketentuan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
              aria-selected="false"><i className="fas fa-dollar-sign mr-2"></i>Harga</a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Waktu</th>
                  <th scope="col">Kegiatan</th>
                  <th scope="col">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>23.00 - 02.00</td>
                  <td>Perjalanan menuju Paltuding</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>23.00 - 02.00</td>
                  <td>Perjalanan menuju Paltuding</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>23.00 - 02.00</td>
                  <td>Perjalanan menuju Paltuding</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div >
    )
  }
}
