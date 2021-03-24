import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
import AddMusic from "./AddMusic";
import Footer from "./footer";


class Dashboard extends Component{

    render(){
        return(
            <div className="dashboard">
                <br></br>
                <DashboardHeader></DashboardHeader>
                    <h2>
                    <i class="fas fa-music"></i>
                        Whats Next? Just add your favorite music and get started with the app!
                    </h2>
                    <AddMusic></AddMusic>
 
                    <hr></hr>
                    <Footer></Footer>
</div>
      
        )};
}

  
export default Dashboard