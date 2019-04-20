import React from 'react';
import {Link} from 'react-router-dom';
import './Result.css';

const thaiIpsum = "แอบมองเธอนั้นโชคดีเนื่องในวันเกิด จะได้พบกันนะเราจะได้ตาสว่างในใจของฉัน เธอนั้นมีอยู่จงเชื่อมันจะได้พบเธอได้รับรู้ถึงความมุ่งไป จะต้องฝันสักเท่าไรไปยืนรอเธออยู่บนนั้น ได้ทำตามลมเหน็บหนาวพัดมาร้องเพลงด้วยกัน แต่ความมั่นใจไปมากมายมาเลยว่าฉันจะมีความฝันนั้นที่กำลังรินไหล ให้เธอรู้ชัดชัดได้ไหมคะหายไปเพื่อให้ฝันนั้นต้องไปที่เดินไปก้าวต่อไปให้ถึงสักวันหนึ่งคนที่ชอบกำลังจะไม่อยากจะรอพวกเธอ ให้กระโปรงพลิ้วไปถึงยังไงและตั้งใจจะบอกบอกความจริงที่อยู่ในใจ ให้แสนไกลเหมือนเกินและข้าวมันไปทุกคนมารวมตัวที่นี่ด้วยกัน";

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
      <div className="component-result d-flex p-2 flex-column justify-content-center align-items-center">
        <p className="title">ผลกรรม</p>
        <p className="text-center">คุณอยู่นรกขุมที่ 8</p>
        <p className="mb-3 mx-lg-5 text-center">{thaiIpsum}</p>
        <p>{'คุณจะตายวันที่ ' + this.getDateString()}</p>
        <button className="btn d-flex flex-column justify-content-end"><Link to="/" className="return">กลับหน้าแรก</Link></button>
      </div>
    );
  }
}
export default Result;
