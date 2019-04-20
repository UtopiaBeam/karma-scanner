import React from 'react';
import './Home.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const component_css = "d-flex d-lg-inline-flex flex-row align-self-center align-self-lg-start offset-lg-2"

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
      <div className="component-home d-flex p-2 flex-column justify-content-center">
        <div className={ component_css }>
            <h1 className="title">วัดผลกรรม</h1>
        </div>
        <div className={ component_css }>
            <form onSubmit={this.onFormSubmit}>
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
                <button className="submit-button btn d-flex flex-row m-auto" type="submit">
                    รับผลกรรม
                </button>
            </form>
        </div>
      </div>
    );
  }
}

export default Home;
