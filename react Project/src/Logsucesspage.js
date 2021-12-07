import React, { Component } from 'react';

import './App.css';



  class Dashboard extends Component {

    render() {


        return (

            <div class="row" className="mb-2 pageheading">

                <div class="col-sm-12 btn btn-primary">

                    Login Successfully.
                 
             </div>
             <span className="form-input-login" > <a href="http://localhost:3000/loginpage"><button style={{marginLeft: "650px", marginTop: "50px"}} class="btn btn-warning">Log Out</button></a></span>
            </div>

        );

    }

}


export default Dashboard;