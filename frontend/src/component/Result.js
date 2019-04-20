import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
import { Helmet } from 'react-helmet';

const cssShow = { display: 'inline' };
const cssHide = { display: 'none' };

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.location.state,
      showModal: false,
    };
    console.log(this.state);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow() {
    this.setState({ showModal: true });
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  getDateString() {
    const date = new Date(this.state.deathday);
    const res = date.toLocaleString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    console.log(res);
    return res;
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>รับผลกรรม</title>
        </Helmet>
        <div className="component-result d-flex p-2 flex-column justify-content-center align-items-center">
          <p className="title">ผลกรรมของคุณ</p>
          <p>{'คุณจะตายวันที่ ' + this.getDateString()}</p>
          <p className="text-center">
            และไปจุติที่
            <button className="btn text-btn" onClick={this.handleShow}>
              {this.state.realm.name}
            </button>
          </p>
          <button className="btn d-flex flex-column justify-content-end">
            <Link to="/" className="{return}">
              กลับหน้าแรก
            </Link>
          </button>
        </div>

        <div
          style={this.state.showModal ? cssShow : cssHide}
          className="overlay container-fluid"
          onClick={this.handleClose}
        >
          <div className="row align-items-center expand-y">
            <div className="col">
              <p className="mb-3 mx-lg-5 text-center title overlay-text">
                {this.state.realm.name}
              </p>
              <p className="mb-3 mx-lg-5 text-center overlay-text">
                {this.state.realm.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Result;
