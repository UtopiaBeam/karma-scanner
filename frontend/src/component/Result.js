import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
import { Helmet } from 'react-helmet';
import Particles from "react-particles-js";
import nyancat from '../images/nyancat.gif';

const cssShow = { display: 'inline' };
const cssHide = { display: 'none' };
const imgNyan = <img width="50%" src={nyancat} alt="nyan cat" />;
const particlesBubble = (
    <Particles
        width={window.innerWidth}
        height={window.innerHeight}
        params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
        }}
    />
);
const particlesSnow = (
    <Particles
        width={window.innerWidth}
        height={window.innerHeight}
        params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "direction": "bottom",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    }
                }
            }
        }}
    />
);

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
      <>
        <Helmet>
          <title>รับผลกรรม</title>
        </Helmet>
        <div className="black-curtain" />
        <div className="component-result" />
        <div className="over container-fluid">
            {particlesSnow}
        </div>
        <div className="over main-content d-flex p-2 flex-column justify-content-center align-items-center">
            <p className="title">ผลกรรมของคุณ</p>
          <p>{'คุณจะตายวันที่ ' + this.getDateString()}</p>
          <p className="text-center">
            และไปจุติที่ 
            <button className="btn text-btn" onClick={this.handleShow}>
              {this.state.realm.name}
            </button>
          </p>
          <button className="btn d-flex flex-column justify-content-end">
            <Link to="/" className="transition-ease">
              กลับหน้าแรก
            </Link>
          </button>
        </div>

        {/* Modal */}
        <div
          style={this.state.showModal ? cssShow : cssHide}
          className="overlay container-fluid"
          onClick={this.handleClose}
        >
          <div className="main-content d-flex p-2 flex-column justify-content-center align-items-center">
            <p className="mb-3 mx-lg-5 text-center title overlay-text">
                {this.state.realm.name}
            </p>
            <p className="mb-3 mx-lg-5 text-center overlay-text">
                {this.state.realm.name === "โลกแฟนตาซี" ? imgNyan : null }
            </p>
            <p className="mb-3 mx-lg-5 text-center overlay-text">
                {this.state.realm.detail}
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Result;
