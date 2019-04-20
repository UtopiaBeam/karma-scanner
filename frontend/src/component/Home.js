import React from 'react';
import './Home.css';
import bg from '../img/bg-buddha.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: undefined,
      firstName: undefined,
      lastName: undefined,
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async onFormSubmit(event) {
    event.preventDefault();
    const { data } = await axios({
      method: 'post',
      url: 'https://us-central1-karmascanner.cloudfunctions.net/karma',
      data: this.state,
    });
    this.setState({
      deathday: data.deathday,
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
            },
          }}
        />
      );
    }
    return (
      <div className="component-home row">
        <img
          className="background col m-0 p-0"
          src={bg}
          alt="Buddha looking judgmentally"
        />
        <div className="form text-center">
          <h1 className="row">วัดผลกรรม</h1>
          <div className="row">
            <form className="col" onSubmit={this.onFormSubmit}>
              <p className="row">ชื่อ</p>
              <input
                type="text"
                name="firstName"
                className="row"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <p className="row">นามสกุล</p>
              <input
                type="text"
                name="lastName"
                className="row"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <p className="row">ชาตกรรม</p>
              <input
                type="date"
                name="birthday"
                className="row"
                value={this.state.birthday}
                onChange={this.handleChange}
              />
              <button type="submit" className="row">
                รับผลกรรม
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
