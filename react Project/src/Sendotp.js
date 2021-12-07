import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Form.css'



function Sendotp() {


    const [email, setEmail] = useState("");
    
    
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/Logsucesspage")


        }
    }, [])
    async function otpsnd() {
        console.log(email);
        let item = { email };
        
        let result = await fetch('http://192.168.1.116:3000/otp', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },

            body: JSON.stringify(item)

        });
        
        result.json().then(data => {
           

            if (data.status === "success") {
             alert(data.message)
             history.push("/forgetsuccess")
            } else if (data.status === "error") {
                alert(data.message);
return true;
        }
        }).catch(error => {
console.log(error);
window.location.href = "/ServerError";
        })



        console.log(Response);
        localStorage.setItem("user-info", JSON.stringify(result))
        console.log(result);




    }
    return (
        <div>
      <div className="logincss">
            <h1>Forget Password</h1>
            <div className="logincss"> <label>Email Id</label>

                <input type="text" name="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="form-control"  /> 
                <br />
               
                <button   className="form-input-btn btn btn-primary" type="submit" onClick={otpsnd}>Send OTP</button>
            </div>
            <span className="form-input-login">Not Registered? Visit <a href="http://localhost:3000/">here</a></span>
        </div></div>
    )
}

export default Sendotp;
