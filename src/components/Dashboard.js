import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
import AddMusic from "./AddMusic";
import Footer from "./footer";
import Getmusic from './GetMusic';


class Dashboard extends Component{

    render(){
        return(
            <div className="dashboard">
                <br></br>
                <DashboardHeader></DashboardHeader>
                    <h2>
                    <i className="fas fa-music"></i>
                        Whats Next? Just add your favorite music and get started with the app!
                    </h2>
                    <AddMusic></AddMusic>
                    <hr></hr>
                    <Getmusic></Getmusic>
                    <Footer></Footer>
</div>
      
        )};
}

  
export default Dashboard