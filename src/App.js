import React from "react";
import './App.css';
//import { Link } from "react-router-dom";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
//import Dashboard from "./components/Dashboard";
//import DashboardHeader from "./components/DashboardHeader";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header>
      </Header>
      <main>
      <SubHeader></SubHeader>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
