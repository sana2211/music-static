import React from "react";
import { Link } from "react-router-dom";


function DashboardHeader(props) {
  return (
      <header>
        <nav>
          <ul>
            <ul className="menuul">
            <li>Welcome jondoe1@email.com</li>
            <li><Link to="/">Sign out</Link></li>
            </ul>
          </ul>
        </nav>
       
                 </header>
    );
}
  export default DashboardHeader;
