import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Form.css'



function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/Logsucesspage")


        }
    }, [])
    async function login() {
        console.log(email, password);
        let item = { email, password };
        if(email ===""){
            alert("Please Enter Email Id.")
        }
        else if(password ===""){
            alert("Please Enter Password.");
          
        

        }
              else{
        let result = await fetch('http://192.168.1.116:3000/userLogin', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },

            body: JSON.stringify(item)

        });
        
        result.json().then(data => {
           

            if (data.status === "success") {
                alert("login Successfully.");
                history.push("/Logsucesspage")
            } else if (data.status === "error") {
                alert("Invalid email Id and password.");
return true;
        }
        }).catch(error => {
console.log(error);
window.location.href = "/ServerError";
        })



        console.log(Response);
        localStorage.setItem("user-info", JSON.stringify(result))
        console.log(result);




    }}
    return (
        <div>
      <div className="logincss">
            <h1>Login Page</h1>
            <div className="logincss"> <label>Email Id</label>

                <input type="text" name="email" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} className="form-control"  /> 
                <br />
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button  name="login" className="form-input-btn btn btn-primary" type="submit" onClick={login}>Log in</button>
            </div>
            <span className="form-input-login">Not Registered? Visit <a href="http://localhost:3000/">here</a></span><br/>
            <span className="form-input-login">Forget Password <a href="http://localhost:3000/forget">here</a></span>

        </div></div>
    )
}

export default Login;
