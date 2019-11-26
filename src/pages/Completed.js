import React from 'react';
import { Link } from 'react-router-dom';

function Completed() {
  return (
    <div className="container text-center" id="completed-page">
      <i class="far fa-check-circle fa-10x mt-5 mb-3"></i>

      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h4 className="mt-3" >Terimakasih telah mempercayakan liburan anda bersama kami. Reservasi anda telah kami terima dan silahkan selesaikan proses pembayaran sebelum batas waktu berakhir.</h4>
          <Link to="/" className="btn btn-sm btn-light-blue mt-4">HOME <i className="fas fa-home ml-2"></i></Link>

        </div>
      </div>

    </div>
  )
}

export default Completed
