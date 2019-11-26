import React from 'react';
import carouselImage1 from '../assets/img/carousel-img-bromo.jpg';
import carouselImage2 from '../assets/img/carousel-img-ijen.jpg';
import carouselImage3 from '../assets/img/carousel-img-baluran.jpg';
import carouselImage4 from '../assets/img/carousel-img-tumpaksewu.jpg';


export default function Carousel() {

  return (

    <div id="mycarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
        <li data-target="#mycarousel" data-slide-to="1"></li>
        <li data-target="#mycarousel" data-slide-to="2"></li>
        <li data-target="#mycarousel" data-slide-to="3"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <img className="d-block w-100 car-img" src={carouselImage1} alt="First slide" />
            <div className="mask rgba-black-light"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">Gunung Bromo</h3>
            <p>Probolinggo, Jawa Timur</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <img className="d-block w-100 car-img" src={carouselImage2} alt="Second slide" />
            <div className="mask rgba-black-strong"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">Kawah Ijen</h3>
            <p>Banyuwangi, Jawa Timur</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <img className="d-block w-100 car-img" src={carouselImage3} alt="Third slide" />
            <div className="mask rgba-black-slight"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">Taman Nasional Baluran</h3>
            <p>Banyuwangi, Jawa Timur</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <img className="d-block w-100 car-img" src={carouselImage4} alt="Third slide" />
            <div className="mask rgba-black-slight"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">Air Terjun Tumpak Sewu</h3>
            <p>Lumajang, Jawa Timur</p>
          </div>
        </div>
      </div>

    </div>
  )
}
