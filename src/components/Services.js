import React from 'react';
import Title from '../components/Title';
import service1 from '../assets/img/price-tag.png';
import service2 from '../assets/img/laugh.png';
import service3 from '../assets/img/camera.png';
import service4 from '../assets/img/van.png';

export default function Services() {
  return (
    <div className="container services-sec">
      <Title title="Mengapa berlibur bersama kami?" />

      <div className="row justify-content-center text-center">
        <div className="col-md">
          <img src={service1} alt="Service 1" className="service-img" />
          <h5>Harga Terbaik</h5>
        </div>
        <div className="col-md">
          <img src={service2} alt="Service 1" className="service-img" />
          <h5>Crew Ramah</h5>
        </div>
        <div className="col-md">
          <img src={service3} alt="Service 1" className="service-img" />
          <h5>Dokumentasi Profesional</h5>
        </div>
        <div className="col-md">
          <img src={service4} alt="Service 1" className="service-img" />
          <h5>Armada Nyaman</h5>
        </div>
      </div>

    </div>
  )
}
