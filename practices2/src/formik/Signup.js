import React from 'react'
import { useFormik} from "formik";
import {validation} from './AuthYup';
function Signup() {
    const {values, handleChange, handleSubmit } = useFormik({
        initialValues: {
       email:'',
       password:'',
       confPassword:''
        },
        onSubmit: values => {
          console.log(values)
        },
     validationSchema:validation, //imported validation scheme, it automatically valid values with mathed names 
   
      });
  return (
    <div>
            <form onSubmit={handleSubmit}>
            <label >Email </label>
            <input
              type="email"
              name="email"
              placeholder="meryemsohret0@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <label >password </label>
            <input
              type="text"
              name="password"
              placeholder=""
              value={values.password}
              onChange={handleChange}
            />
            <br />
            <br />
            <label >Email </label>
            <input
              type="text"
              name="confPassword"
              placeholder=""
              value={values.confPassword}
              onChange={handleChange}
            />
            <br />
            <br />
  
          
           
          
            <br /> <br />
            <button type="submit">Submit</button>
            <br /> <br />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
    </div>
  )
}

export default Signup
