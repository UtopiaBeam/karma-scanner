import React from 'react';
import './Home.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Particles from "react-particles-js";
import dhammy from '../images/dhammy.jpg';

const cssShow = { display: 'inline' };
const cssHide = { display: 'none' };
const component_css =
  'd-flex d-lg-inline-flex flex-row align-self-center align-self-lg-start offset-lg-2';
const particlesFloat = (
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
              "speed": 1,
              "direction": "none",
              "out_mode": "bounce"
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      birthday: '',
      firstName: '',
      lastName: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    this.setState({ isLoading: true, });
    this.onFormSubmit(event)
  }

  async onFormSubmit(event) {
    event.preventDefault();
    const { data } = await axios({
      method: 'post',
      url: 'https://us-central1-karmascanner.cloudfunctions.net/karma',
      data: this.state,
    });
    console.log(data);
    this.setState({
      ...data,
      redirect: true,
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/result',
            state: {
              deathday: this.state.deathday,
              realm: this.state.realm,
            },
          }}
        />
      );
    }

    return (
      <div>
        <Helmet>
          <title>สแกนกรรม</title>
        </Helmet>
        <div className="component-home" />
        <div className="over container-fluid">
          {particlesFloat}
        </div>
        <div className="over main-content d-flex p-2 flex-column justify-content-center">
          <div className={component_css}>
            <h1 className="title">วัดผลกรรม</h1>
          </div>
          <div className={component_css}>
            <form onSubmit={this.handleClick}>
              <p className="label p-0 m-0">ชื่อ</p>
              <input
                className="form-control translucent custom-font"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <p className="label p-0 m-0">นามสกุล</p>
              <input
                className="form-control translucent custom-font"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <p className="label p-0 m-0">ชาตกรรม</p>
              <input
                className="form-control translucent mb-3 custom-font"
                type="date"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
              />
              <button
                className="submit-button btn d-flex flex-row m-auto"
                type="submit"
              >
                รับผลกรรม
              </button>
            </form>
          </div>
        </div>
        <div style={this.state.isLoading ? cssShow : cssHide} className="overlay container-fluid">
          <div className="main-content d-flex p-2 flex-column justify-content-center align-items-center">
            <img src={ dhammy } alt="Dhammy"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
