import React from "react";
import { Link } from "react-router-dom";


function DashboardHeader(props) {
  return (
      <header>
        <nav>
          <ul>
            <ul className="menuul">
            <li><Link to="/" >Welcome</Link></li>
            <li><Link to="/signin">Sign out</Link></li>
            </ul>
          </ul>
        </nav>
       
                 </header>
    );
}
  export default DashboardHeader;
