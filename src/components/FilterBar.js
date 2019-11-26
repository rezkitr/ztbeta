import React, { Component } from 'react';
import dest1 from '../assets/img/surabaya.jpg';
import dest2 from '../assets/img/magelang.jpg';
import dest3 from '../assets/img/bandung.jpg';
import dest4 from '../assets/img/jogja.jpg';
import dest5 from '../assets/img/bali.jpg';

export default class FilterBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center text-center filter-bar">
          <div className="col-md">
            <img src={dest1} alt="jawa timur" className="rounded-circle hoverable" width="160px" />
            <h6 className="filter-label" >Jawa Timur</h6>
          </div>
          <div className="col-md">
            <img src={dest2} alt="jawa timur" className="rounded-circle hoverable" width="160px" />
            <h6 className="filter-label" >Jawa Tengah</h6>
          </div>
          <div className="col-md">
            <img src={dest3} alt="jawa timur" className="rounded-circle hoverable" width="160px" />
            <h6 className="filter-label" >Jawa Barat</h6>
          </div>
          <div className="col-md">
            <img src={dest4} alt="jawa timur" className="rounded-circle hoverable" width="160px" />
            <h6 className="filter-label" >Jogjakarta</h6>
          </div>
          <div className="col-md">
            <img src={dest5} alt="jawa timur" className="rounded-circle hoverable" width="160px" />
            <h6 className="filter-label" >Bali</h6>
          </div>
        </div>
        <hr style={{ marginTop: "50px" }} />
      </div>
    )
  }
}
