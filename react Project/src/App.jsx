import React from "react";
import { Route , Switch } from "react-router";
import FormSignup from "./FormSignup";
import Login from "./Login";
import Logsucesspage from "./Logsucesspage"
import ServerError from "./ServerError.js"
import Sendotp from "./Sendotp";
import ForgetSuccess from "./ForgetSuccess";


const App =()=>{
return <>

<Switch>

    <Route exact path='/' component={FormSignup}/>
    <Route path='/loginpage' component={Login}/>
    <Route path='/Logsucesspage' component={Logsucesspage}/>
    <Route path='/Logsucesspage' component={Logsucesspage}/>
    <Route path='/ServerError' component={ServerError}/>
    <Route path ='/forget' component={Sendotp}/>
    <Route path ='/forgetsuccess' component={ForgetSuccess}/>
</Switch>

</>
}

export default App; 