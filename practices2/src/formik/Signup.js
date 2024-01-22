import React from 'react'
import { useFormik} from "formik";
import {validation} from './AuthYup';
function Signup() {
    const {values, handleChange, handleSubmit,errors,touched,handleBlur } = useFormik({
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
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            <br />
            <br />
            <label >password </label>
            <input
              type="text"
              name="password"
              placeholder=""
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur} //show errors when unfocued on input
            />
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            <br />
            <br />
            <label >Email </label>
            <input
              type="text"
              name="confPassword"
              placeholder=""
              value={values.confPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confPassword && touched.confPassword && <p className='error'>{errors.confPassword}</p>}
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
