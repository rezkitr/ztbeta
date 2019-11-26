import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class FormReservasi extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    }

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    })
  }

  prevButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (

        <div className="text-left">
          <button type="button" className="btn btn-sm btn-blue-grey" onClick={this._prev} ><i class="fas fa-angle-left mr-2"></i>KEMBALI</button>
        </div>


      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (

        <div className="text-right">
          <button type="button" className="btn btn-sm btn-success" onClick={this._next} >SELANJUTNYA<i class="fas fa-angle-right ml-2"></i></button>
        </div>

      )
    }
    return null;
  }

  payButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <div className="text-right">

          <Link to="/completed" className="btn btn-sm btn-success" onClick={this._next} >BAYAR<i class="far fa-credit-card ml-2"></i></Link>

          {/* <button type="button" className="btn btn-sm btn-success" onClick={this._next} >BAYAR</button> */}
        </div>
      )
    }
    return null;
  }

  render() {

    return (
      <div className="row justify-content-center form-rsv" >
        <div className="col-md-8">
          <Form1 currentStep={this.state.currentStep} />
          <Form2 currentStep={this.state.currentStep} />
          <Form3 currentStep={this.state.currentStep} />

          <div className="row">
            {this.prevButton()}
            {this.nextButton()}
            {this.payButton()}
          </div>

        </div>
      </div>
    )
  }
}

function Form1(props) {

  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <h4 className="text-center" style={{ fontWeight: "500" }}>Form 1</h4>
      <h6 className="text-center" >Detail Reservasi</h6>
      <hr />
      <form className="py-3" >
        <div className="form-group row">
          <label htmlFor="tujuan" className="col-md-3 col-form-label">TUJUAN</label>
          <div className="col-md">
            <input type="text" readonly className="form-control" id="tujuan" value="BROMO 2D1N" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tanggal" className="col-md-3 col-form-label">TANGGAL</label>
          <div className="col-md">
            <select id="tanggal" className="custom-select" required>
              <option value="" disabled selected>Pilih Tanggal</option>
              <option value="1">12/12/2019</option>
              <option value="2">13/12/2019</option>
              <option value="3">14/12/2019</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="mepo" className="col-md-3 col-form-label">MEETING POINT</label>
          <div className="col-md">
            <select id="mepo" className="custom-select" required>
              <option value="" disabled selected>Pilih Meeting Point</option>
              <option value="1">Stasiun Gubeng</option>
              <option value="2">Stasiun Waru</option>
              <option value="3">Terminal Bungurasih</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="jumlahPeserta" className="col-md-3 col-form-label">JUMLAH PESERTA</label>
          <div className="col-md">
            <input type="number" className="form-control" id="jumlahPeserta" required />
          </div>
        </div>

        <h6 className="mt-5 mb-4" style={{ fontWeight: "400" }} >KOORDINATOR/PEMESAN</h6>
        <div className="form-group row">
          <label htmlFor="namaKoor" className="col-md-3 col-form-label">NAMA LENGKAP</label>
          <div className="col-md">
            <input type="text" className="form-control" id="namaKoor" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="telpKoor" className="col-md-3 col-form-label">NO. TELP</label>
          <div className="col-md">
            <input type="text" className="form-control" id="telpKoor" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="emailKoor" className="col-md-3 col-form-label">EMAIL</label>
          <div className="col-md">
            <input type="email" className="form-control" id="emailKoor" required />
          </div>
        </div>
      </form>
    </div>

  )
}

function Form2(props) {

  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div>
      <h4 className="text-center" style={{ fontWeight: "500" }}>Form 2</h4>
      <h6 className="text-center" >Data Peserta</h6>
      <hr />
      <form className="py-3" >
        <div className="form-group row">
          <div class="form-group col-md-6">
            <label htmlFor="namaPeserta">Nama Lengkap</label>
            <input type="text" className="form-control" id="namaPeserta" />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="genderPeserta">L/P</label>
            <select id="genderPeserta" className="custom-select" required>
              <option value="" disabled selected>-</option>
              <option value="1">L</option>
              <option value="2">P</option>
            </select>
          </div>
          <div className="form-group col-md">
            <label htmlFor="telpPeserta">No. Telp</label>
            <input type="text" className="form-control" id="telpPeserta" />
          </div>
        </div>

      </form>
    </div>

  )
}

function Form3(props) {

  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div>
      <h4 className="text-center" style={{ fontWeight: "500" }}>Form 3</h4>
      <h6 className="text-center" >Konfirmasi Reservasi</h6>
      <hr />
      <form >
        <div className="form-group row">
          <label htmlFor="koor" className="col-md-3 col-form-label">KOORDINATOR</label>
          <div className="col-md">
            <input type="text" readonly className="form-control-plaintext" id="koor" value="Rezki Triandy" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="telpKoor" className="col-md-3 col-form-label">NO. TELP</label>
          <div className="col-md">
            <input type="text" readonly className="form-control-plaintext" id="telpKoor" value="087812345678" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tujuan" className="col-md-3 col-form-label">TUJUAN</label>
          <div className="col-md">
            <input type="text" readonly className="form-control-plaintext" id="tujuan" value="BROMO 2D1N" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tanggal" className="col-md-3 col-form-label">TANGGAL</label>
          <div className="col-md">
            <input type="text" readonly className="form-control-plaintext" id="tanggal" value="12/12/2019" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="mepo" className="col-md-3 col-form-label">MEETING POINT</label>
          <div className="col-md">
            <input type="text" readonly className="form-control-plaintext" id="mepo" value="Stasiun Gubeng" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="jumlahPeserta" className="col-md-3 col-form-label">JUMLAH PESERTA</label>
          <div className="col-md">
            <input type="text" readonly className="form-control-plaintext" id="jumlahPeserta" value="2" required />
          </div>
        </div>

        <h6 className="mt-5" style={{ fontWeight: "400" }} >PEMBAYARAN</h6>
        <div className="btn-group mb-4" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-warning " style={{ fontWeight: "600" }}><i class="fas fa-hourglass-start mr-2"></i> DP</button>
          <button type="button" className="btn btn-primary" style={{ fontWeight: "600" }}><i class="fas fa-hourglass mr-2"></i>LUNAS</button>
        </div>

        <h3 className="mb-4" style={{ fontWeight: "800" }} >Rp 600.000</h3>

      </form>
    </div>

  )
}
