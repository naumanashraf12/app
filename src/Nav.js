import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div
        className="row pt-4 justify-content-between"
        style={{ backgroundColor: "black", marginRight: 0, paddingRight: 0 }}
      >
        <div className="col-md-6 mr-auto col1 ">
          <img src={`${process.env.PUBLIC_URL}/images/arrowDAO.svg`} alt="" />
          <ul>
            <li>Home</li>
            <li>pool</li>
            <li>About$oval</li>
            <li>Vote</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-5" style={{ marginLeft: "10px" }}>
          <div className="justify-content-end">
            <button className="btn btn-dark">0$oval</button>
            <button className="btn btn-dark">connect to wallet</button>
            <button className="btn btn-dark">
              <img
                src={`${process.env.PUBLIC_URL}/images/dot-more.svg`}
                alt=""
              />
            </button>
            <button className="btn btn-dark">
              <img
                src={`${process.env.PUBLIC_URL}/images/moon-dark-mode.svg`}
                alt=""
              />
            </button>
          </div>

          {/* <div className="row">
            <div className="col-md-3">
              <h1 className="btn">0$oval</h1>
            </div>
            <div className="col-md-6">
              <h1 className="btn">connect to wallet</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
