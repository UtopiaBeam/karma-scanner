import React from 'react';
import './Result.css';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
    console.log(this.state);
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
      <div className="component-result">
        <p className="title">ผลกรรม</p>
        <p>{'คุณจะตายวันที่ ' + this.getDateString()}</p>
      </div>
    );
  }
}
export default Result;
