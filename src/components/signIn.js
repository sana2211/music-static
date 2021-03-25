import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";

class signIn extends React.Component {
  render() { 
      return (
       <div>
        <Header></Header>
        <h1>Sign in</h1>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
             <button><Link to="/dashboard">Sign In</Link></button>
            </div>
            <br></br>
          </div>
          </form>

          <Footer></Footer>
          </div>
    );
  }
}
export default signIn;
