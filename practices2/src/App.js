/** @format */

import React from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender:"female",
          country:"",
          hobies:[]
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
            <br /> <br />
            <label>Selecet Gender : </label>
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value={"male"}
              onChange={handleChange}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value={"female"}
              onChange={handleChange}
              checked={values.gender === "female"}
            />
         <br /> <br />
            <span >Chose your country </span>
            <br/>
             <select name={values.country} onChange={handleChange}>
              <option value={'tr'}  onClick={()=>console.log('turkiye has been clicked')}> Turkiye</option>
              <option value={'eg'}>Egypt</option>
              <option value={'fr'} >France</option>
             </select>
            <br /> <br />
            <span> chose your hobies</span>
              <br/>
               <div>
                <input type="checkbox" name={'hobies'} value={'football'} 
                onChange={handleChange}
                />
                footbal
               </div>
               <div>
                <input type="checkbox" name={'hobies'} value={'coding'} onChange={handleChange}/>
                coding
               </div>
               <div>
                <input type="checkbox" name={'hobies'} value={'reading'}
                onChange={handleChange}/>
                reading book
               </div>
            <br /> <br />
            <button type="submit">Submit</button>
            <br /> <br />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
