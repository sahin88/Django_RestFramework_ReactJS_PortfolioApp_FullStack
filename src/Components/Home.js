import React, { Component } from "react";
import { FaDesktop, FaHandPointRight } from "react-icons/fa";
import {
  FaGithub,
  FaYoutube,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { Link, } from "react-router-dom";
import Footer from "./Footer";

export class Home extends Component {
  removeClass = () => {
    let listElement = document.querySelector(".Text");
    if (listElement != null) {
      if (listElement.classList.contains("Hidden")) {
        listElement.classList.remove("Hidden");
      } else {
        try {
          listElement.classList.add("Hidden");
        } catch (err) {
          console.log("err", err);
        }
      }
    }
  };

  render() {
    return (
      <div>
        <div className="homePageMainDiv">
          <h1 className="homePageH1Text">
            {" "}
            Hello I'am <span style={{ color: "#e8491d" }}>Sahin</span>,
            <br />
            <br /> I'am Sofware Devoloper.
            <br />
            <div className="total">
              <div id="cube">
                <div className="box">
                  <div className="front-face">HELLO!</div>
                  <div className="back-face">HALLO</div>
                  <div className="left-face">ԲԱՐԵՒ ՁԵԶ</div>
                  <div className="right-face">שלום</div>
                  <div className="top-face"></div>
                  <div className="bottom-face"></div>
                </div>
              </div>
              <div className="slidingText">
                <ul className="Text Hidden">
                  <li>W</li>
                  <li>E</li>
                  <li>L</li>
                  <li>L</li>
                  <li>C</li>
                  <li>0</li>
                  <li>M</li>
                  <li>E</li>
                </ul>
              </div>

              <div id="cube2">
                <div className="box2">
                  <div className="front-face">MERHABA</div>
                  <div className="back-face">ΧΑΙΡΕΤΕ</div>
                  <div className="left-face">HALLÅ</div>
                  <div className="right-face">HOLA</div>
                  <div className="top-face">MERHABA</div>
                  <div className="bottom-face">ΧΑΙΡΕΤΕ</div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            Welcome to my Homepage !
          </h1>
        </div>
        <section className="homePageTopSection">
          <div className="homePageTopSectionIconDiv">
            <FaHandPointRight className="homePageIcon moving" />
            <FaYoutube className="homePageIcon" />
            <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" >
              <FaGithub className="homePageIcon" />
            </Link>
          </div>
          <div className="homePageTopSectionFormDiv">
            <form method="Post" action="/home">
              <input type="email" placeholder=" Send me message"></input>
              <button type="submit"> Send</button>
            </form>
          </div>
        </section>
        <section className="homePageBottomSection">
          <div className="homePageTopSectionBoxDiv">
            <FaPython className="homePageIcon2 pythonIcon" />
            <h3> Python </h3>
            <p>
              {" "}
           
            </p>
          </div>
          <div className="homePageTopSectionBoxDiv">
            <DiJavascript1 className="homePageIcon2 jsIcon" />
            <h3> JavaScript</h3>
            <p>
              {" "}
             
            </p>
          </div>
          <div className="homePageTopSectionBoxDiv">
            <FaJava className="homePageIcon2 javaIcon" />
            <h3> Java </h3>
            <p>
              {" "}
              
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.removeClass();
    }, 14000);
  }
}

export default Home;
