import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Form.css'



function ForgetSuccess() {


    const [password, setPassword] = useState("");
    const [otp, setotp] = useState("");


    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/Logsucesspage")


        }
    }, [])
    async function change() {
        console.log(password);
        let item = {otp , password};
        if (otp === "") {
            alert("Please Enter OTP.")
        }
 else if (password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") == -1){
     alert("Please enter Minimum 6 & maximum 16 value ,one Uppercase One Lowercase one Numaric and one Special Charachter.")
 }




        else {
            let result = await fetch('http://192.168.1.116:3000/forgetPass', {

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

                    history.push("/loginpage")
                } else if (data.status === "error") {
                    alert(data.message);
                    console.log(data);
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
    }
    return (
        <div>
            <div className="logincss">
                <h1>Reset Your Password</h1>
                <div className="logincss"> <label>Enter New Password</label>

                    <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    <br />
                    <label>Enter OTP</label><br />
                    <input type="text" name="otp" placeholder="Enter OTP" onChange={(e) => setotp(e.target.value)} className="form-control" />
                    <br />
                    <button className="form-input-btn btn btn-primary" type="submit" onClick={change}>Change Pass.</button>
                </div>
                <span className="form-input-login">Not Registered? Visit <a href="http://localhost:3000/">here</a></span>
            </div></div>
    )
}

export default ForgetSuccess;
