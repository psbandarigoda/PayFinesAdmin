
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UserRegister from "./components/user_managment/register.component";
import UserLogin from "./components/user_managment/login.component";
import TopNavBar from "./components/include/topNavBar.component";
import Footer from "./components/include/footer.component";
import Home from "./components/home/home.component";
import Logout from "./components/user_managment/logout.component";
import Fines from "./components/Fines/fines.component";
import Officer from "./components/Officer/officer.component";
import FineMoreDetails from "./components/FineMoreDetails/FineMoreDetails.component";
import FAQ from "./components/FAQ/FAQ";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
    return (
        <Router>
            {/*<TopNavBar/>*/}
            <Route exact path="/" component={UserLogin} />
            <Route path="/home" component={Home}/>
            <Route path="/register" component={UserRegister}/>
            <Route path="/logout" component={Logout} />
            <Route path="/fines" component={Fines} />
            <Route path="/officer" component={Officer} />
            <Route path="/fineMoreDetails" component={FineMoreDetails} />
            <Route path="/faq" component={FAQ} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/*<Footer/>*/}
        </Router>
    );
}

export default App;
