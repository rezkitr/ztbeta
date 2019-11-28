import React, { Component } from 'react'

export default class Download extends Component {
  render() {
    return (
      <div className="container" id="download-page" >
        <div className="row justify-content-center text-center download-row">
          <div className="col-md-3 pt-2" >
            <h5><i class="far fa-calendar-alt mr-3"></i>Jadwal Open Trip</h5>
          </div>
          <div className="col-md-4">
            <select id="bulan" className="custom-select" required>
              <option value="" disabled selected>Bulan</option>
              <option value="1">Januari</option>
              <option value="2">Februari</option>
              <option value="3">Maret</option>
            </select>
          </div>
          <div className="col-md text-left">
            <button className="btn btn-cyan btn-sm" >Download<i class="far fa-arrow-alt-circle-down ml-2"></i></button>
          </div>
        </div>
        <hr />

      </div>
    )
  }
}
