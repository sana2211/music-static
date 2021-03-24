import React from "react";
import Header from "./header";
import Footer from "./footer";

class signIn extends React.Component {
  state = {  }
  render() { 
      return (
       <div>
        <Header></Header>
        <h1>Sign in</h1>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
             <button>Sign In</button>
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
