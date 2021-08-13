import React from "react";
import "./main.css";
function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 " style={{ backgroundColor: "black" }}>
          <div
            className="col11 ml-auto  "
            style={{ width: "23vw", marginTop: "10vh" }}
          >
            <h1 className="title1">
              DeFi’s
              <br /> Diversified
              <br /> High-yield
              <br /> Savings Account
            </h1>
            <button className="btn btn-dark buttoncustom1 ">
              product document
            </button>
          </div>
          <div
            className="col11 ml-auto"
            style={{ width: "25vw", marginTop: "4vh" }}
          >
            <h2 className="faq">FAQ</h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis fugiat nobis repellendus molestias dignissimos omnis
              sapiente totam deleniti, nesciunt tenetur perspiciatis sequi
              impedit facere recusandae nam, eveniet blanditiis! Recusandae,
              modi!
            </p>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="col11 ml-auto" style={{ marginTop: "10vh" }}>
            <h1
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                marginLeft: "1vw",
              }}
            >
              stake
            </h1>
            <span className="span">view contact</span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="span">stack</span>
              <span className="span" style={{ marginRight: "1vw" }}>
                Available
              </span>
            </div>
            <div
              className="input"
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderStyle: "groove",
              }}
            >
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/BUSD.svg`} alt="" />
                <span style={{ color: "white" }}>BUSD</span>
                <textfeild />
              </div>
              <span style={{ color: "white" }}>0</span>
            </div>
            <span className="span">Total Value Locked</span>
            <h1
              style={{
                color: "white",
                marginLeft: "1vw",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              $123213124
            </h1>
            <button
              className="btn btn-dark w-75  "
              style={{ marginLeft: "4vw" }}
            >
              stake
            </button>
            <div>
              <span className="span">
                Enter an amount to see more trading details
              </span>
            </div>
            <hr
              className="w-75"
              style={{ height: "1px", color: "white", marginLeft: "4vw" }}
            />

            <div className="d-md-flex justify-content-md-between">
              <div>
                <span className="span">TotalAPI</span>
              </div>
              <div>
                <h2
                  style={{
                    color: "white",
                    marginLeft: "1vw",
                    fontWeight: "600",
                    fontSize: "14px",
                    marginRight: "1vw",
                  }}
                >
                  Max Reward 5.04 DEX
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
