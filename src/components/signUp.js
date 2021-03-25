import React from "react";
import Header from "./header";
//import styles from "./login.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {


  render() {
    return (
      <div>
        <Header></Header>
        <h1>Sign up</h1>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container">
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input type="text" name="fullname" placeholder="fullname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
            <button><Link to="/signin">Sign Up</Link></button>
            </div>
            <br></br>
          </div>
          </form>
          <Footer></Footer>
            </div>

    );
  }
}
