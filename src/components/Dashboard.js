import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
//import styles from "./login.css";
import Footer from "./footer";

class Dashboard extends Component{

    render(){
        //console.log(this.props.match.params.id)
        return(
            <div className="dashboard">

                <br></br>
             <DashboardHeader></DashboardHeader>
                    <h2>
                    <i className="fas fa-music"></i>
                        Whats Next? Just add your favorite music and get started with the app!
                    </h2> 
                    <hr></hr>
                    <Footer></Footer>
</div>
      
        )};
}

  
export default Dashboard