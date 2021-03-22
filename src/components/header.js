import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
      <header>
        <nav>
          <ul>
            <ul className="menuul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
            </ul>
          </ul>
        </nav>
       
                 </header>
    );
}
  export default Header;
  