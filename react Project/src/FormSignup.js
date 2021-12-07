import React from 'react'
import useForm from './useForm.js'
import Validate from './ValidateInfo';
import './Form.css'




const FormSignup = ({ submitForm }) => {
  

    const { handleChange,handleSubmit,values, errors } = useForm(submitForm,Validate);

    
  
    
    return (

        
        <div className="form-content">
            <form className="form" name="myform" onSubmit={handleSubmit}>
                <h1>Registration Page</h1>
                <div >
                    <label htmlFor="username" className="form-label">
                    Name :   

                    </label>
                    <input id="username"  className="form-control" type="text" name={"username".trim()} className="form-input" placeholder="Enter Username"
                        value={values.username}  onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <br/>
                <div>
                    <label htmlFor="Email" className="form-label">
                    Email :

                    </label>
                    <input id="email"  className="form-control" type="text" name="email" className="form-input" placeholder="Enter Email" value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div><br/>

                <div >
                    <label htmlFor="password" className="form-label">
                    Password : 

                    </label>
                    <input id="password"  className="form-control" type="password" name="password" className="form-input" placeholder="Enter password" value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div><br/>

                <div >
                    <label htmlFor="mobile" className="form-label">
                      
                     Mobile :

                    </label>
                    <input id="mobile" type="number"  className="form-control" name="mobile" className="form-input" placeholder="Enter Number" value={values.mobile} onChange={handleChange} />
                    {errors.mobile &&  <p>{errors.mobile}</p>}
                </div><br/>
                <button className="form-input-btn btn btn-primary" type="submit"  >Submit</button>
                <br/><br/><br/>
                <span className="form-input-login">Already have an account? Login <a href="http://localhost:3000/loginpage">here</a></span>
                </form> 
              

</div>
    );

};


export default FormSignup;
