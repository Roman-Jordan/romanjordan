import React from "react";
import profi from "../../../assets/tester.jpg";
import { aRoute } from "../util/functions";
const Header = (props) => {
  return (
    <header className="mainHeader">
      

      <nav className="navigation">
        <div className="profilePic">
          <img src={profi} />
          <h1>Roman Jordan</h1>
        </div>
        <div className="navLinks">
          <a onClick={(e) => aRoute(e, props)}>Portfolio</a>
          <a onClick={(e) => aRoute(e, props)}>Projects</a>
          <a onClick={(e) => aRoute(e, props)}>Tutorials</a>
          <a onClick={(e) => aRoute(e, props)}>Sign In</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
