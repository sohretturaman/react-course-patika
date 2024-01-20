/** @format */

import React, { useEffect, useState } from "react";
import ContactsList from "./ContactsList";
import InputForm from "./InputForm";
import "./styles.css";
const DummyData = [
  { firstName: "meryem", number: "555-555-5555" },
  {
    firstName: "sohret",
    number: "6498749",
  },
];
function Index() {
  const [contacts, setContacts] = useState(DummyData);
  useEffect(() => {}, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <ContactsList contactData={contacts} />
      <InputForm contacts={contacts} handleAddContact={setContacts} />
    </div>
  );
}

export default Index;

//not :  should use ,    display: flex;  in css file to being able to show some styles , like justifycontent:space-between
