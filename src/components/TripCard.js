import React from 'react';
import { Link } from 'react-router-dom';

function TripCard() {
  return (
    <div>
      <div className="card">
        <div className="view overlay">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
          <Link to="/opentrip/detail/123">
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body text-center">
          <h4 className="card-title">Bromo 2D1N</h4>
          <h5 className="card-text">IDR 350.000/pax</h5>
          <Link to="/opentrip/detail/123" className="btn btn-sm btn-purple">Detail</Link>
        </div>
      </div>
    </div>
  )
}

export default TripCard;
