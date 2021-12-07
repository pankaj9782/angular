import React, { Component } from 'react';


import './App.css';



  class ServerError extends Component {

    render() {


        return (

            <div class="row" className="mb-2 pageheading">

                <div class="col-sm-12 btn btn-primary">

               Error 404 Page not Found.
                 
             </div>
             <span className="form-input-login" > <a href="/"><button class="btn btn-warning">Back</button></a></span>
            </div>

        );

    }

}


export default ServerError;