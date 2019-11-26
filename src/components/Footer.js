import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small unique-color-dark" >
        <div className="container footer-body">
          <div className="row justify-content-center mt-3">
            <div className="col-md-5">
              <h6 className="text-uppercase font-weight-bold" style={{ marginTop: "50px", marginBottom: "10px" }}>Layanan Pelanggan</h6>
              <hr className="white" style={{ marginBottom: "30px" }} />
              <p><i className="far fa-building fa-lg mr-3"></i> Jl. Kaliwaron No.58, Surabaya, Jawa Timur 60285</p>
              <p><i className="fas fa-phone-alt fa-lg mr-3"></i>+62 812-3093-3306</p>
              <p><i className="far fa-envelope fa-lg mr-3"></i>zonatamasya@gmail.com</p>
            </div>
            <div className="col-md-5">
              <h6 className="text-uppercase font-weight-bold" style={{ marginTop: "50px", marginBottom: "10px" }}>Ikuti Kami</h6>
              <hr className="white" style={{ marginBottom: "30px" }} />
              <a href="https://instagram.com/zonatamasya" target="_blank" ><i className="fab fa-instagram fa-3x mr-4"></i></a>
              <a href="https://www.facebook.com/zonatamasya" target="_blank"><i className="fab fa-facebook fa-3x mr-4"></i></a>
              <a href="https://twitter.com/zonatamasya" target="_blank"><i className="fab fa-twitter fa-3x mr-4"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2019 Zona Tamasya
        </div>
      </footer>
    </div>
  )
}
