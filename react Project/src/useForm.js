import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = (callback, validate) => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    mobile: '',

  });



  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({

      ...values,
      [name]: value

    });


  };



  const handleSubmit = e => {

    e.preventDefault();
    console.log(validate(values))

    if (validate(values) !== undefined) {
      setErrors(validate(values));

      setIsSubmitting(false);
      return;
    } else {
      axios.post('http://192.168.1.116:3000/register', values).then(response => {

        if (response.data.status === 'error') {
          alert(response.data.message);
          console.log(response);
          window.location.href = "/";
          return false;
        }
        else if (response.data.status === 'success') {
          alert(response.data.message);
          console.log(response);
          window.location.href = "http://localhost:3000/loginpage";
          return false;

        } else {
          return response;
        }


      })
        .catch(response => {
          console.log(response);
          window.location.href = "/ServerError";

        })
    }

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        //  window.location.href = "http://localhost:3000/loginpage";
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;