import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bannerBG from '../assets/img/surabaya.jpg';

export default class Banner extends Component {
  render() {

    return (
      <div className="container">
        <div className="row banner-row">
          <div className="col-md-7">
            <img src={bannerBG} alt="banner" className="banner-img" />
          </div>
          <div className="col-md banner-desc pl-4">
            <h3>Gunung Bromo</h3>
            <hr />
            <p className="text-justify" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, laudantium sint. Soluta eveniet quaerat perspiciatis, quod ipsa animi, ducimus voluptatem omnis magni libero enim quae. Aliquid, totam architecto? Eveniet, ducimus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, laudantium sint. Soluta eveniet quaerat perspiciatis, quod ipsa animi, ducimus voluptatem omnis magni libero enim quae. Aliquid, totam architecto? Eveniet, ducimus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, laudantium sint. Soluta eveniet quaerat perspiciatis, quod ipsa animi, ducimus voluptatem omnis magni libero enim quae. Aliquid, totam architecto? Eveniet, ducimus?</p>
          </div>
        </div>
      </div>

    )
  }
}
