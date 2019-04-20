import React from "react";
import { Link } from "react-router-dom"
import "./Home.css";
import bg from "../img/bg-buddha.png";

class Home extends React.Component {
    render() {
        return (
            <div className="component-home row">
                <img className="background col m-0 p-0" src={bg} alt="Buddha looking judgmeentally" />
                <div className="form text-center">
                    <h1 className="row">วัดผลกรรม</h1>
                    <div classNae="row">
                        <form className="col">
                            <p className="row">ชื่อ-นามสกุล</p>
                            <input type="text" className="row"/>
                            <p className="row">ชาตกรรม</p>
                            <input type="date" className="row"/>
                        </form>
                    </div>
                    <button className="btn row">
                        <Link to="/result">รับผลกรรม</Link>
                    </button>
                </div>
            </div>
        );
    }
}
export default Home;