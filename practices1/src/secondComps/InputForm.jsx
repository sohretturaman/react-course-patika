/** @format */

import React, { useState } from "react";
import "./styles.css";

const initialValues = {
  firstName: "",
  number: "",
};
function InputForm({ handleAddContact, contacts }) {
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeInput = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (formValues.firstName === "" || formValues.number === "") {
      return false;
    }

    handleAddContact([...contacts, formValues]);

    setFormValues(initialValues);
  };
  return (
    <form onSubmit={onSubmitForm}>
  
      <div>
        <input
          value={formValues.firstName}
          name="firstName"
          placeholder="enter your first name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          value={formValues.number}
          name="number"
          type="tel"
          placeholder="enter your phone number"
          onChange={onChangeInput}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default InputForm;
