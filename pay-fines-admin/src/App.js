
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


function App() {
    return (
        <Router>
            <TopNavBar />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={UserLogin}/>
            <Route path="/register" component={UserRegister}/>
            <Route path="/logout" component={Logout} />
            <Route path="/fines" component={Fines} />
            <Footer/>
        </Router>
    );
}

export default App;