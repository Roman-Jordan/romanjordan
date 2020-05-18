import React from "react";
import profi from "../../../assets/tester.jpg";
import {aRoute} from '../../util/functions';
const Header = (props) => {
  return (
    <header className="mainHeader">
      <div className="headerImage">
        <h1>Roman Jordan</h1>
        <div className="profilePic"> 
          <img src={profi}/>
        </div>
        {/* <p>Time Saving Tecnology Implimentation and Distribution Expert</p> */}
      </div>

      <nav className="navigation">
        
        <div className="navLinks">
          <a onClick={e=>aRoute(e,props)}>Portfolio</a>
          <a onClick={e=>aRoute(e,props)}>Projects</a>
          <a onClick={e=>aRoute(e,props)}>Tutorials</a>
          <a onClick={e=>aRoute(e,props)}>Sign In</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
