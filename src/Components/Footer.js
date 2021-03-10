import React, { Component } from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="homePageFooter">
          <p>
            {" "}
            Smo Web Design Copyright
            <span>
              <AiOutlineCopyright />
            </span>{" "}
            2020
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
