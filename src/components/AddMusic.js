import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class AddMusic extends React.Component {
  render() {
    return (
      <div>
        <h2>Add music</h2>
        <form>
          <div className="form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" placeholder="title" />
            </div>
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input type="text" name="artist" placeholder="artist" />
            </div>
            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input type="text" name="url" placeholder="url" />
            </div>
            <div className="form-group">
             <button>Add</button>
            </div>
            <br></br>
          </div>
          </form>  

             </div>

    )};
}
