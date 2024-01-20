/** @format */

import React, { useState } from "react";
import "./styles.css";

//Note for Styles : if you give an id to div component , you  style it with #idName,
//if you give a className to div comp , you style it with .className

function ContactsList({ contactData }) {
  const [filteredText, setFilteredText] = useState("");
  const FilteredData = contactData.filter((item) =>
    Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLocaleLowerCase())
    )
  );

  return (
    <div className="contactList">
      <input
        placeholder="filter list"
        onChange={(e) => setFilteredText(e.target.value)}
        value={filteredText}
      />
      <div className="contactListContainer">
        <ul>
          {FilteredData?.map((contact, index) => (
            <div key={index} className="contactItem">
              <li>
               <span>{contact.firstName} </span>
               <span>{contact.number} </span>
                 
              </li>
            </div>
          ))}
        </ul>
      </div>
      <p>Total Contacts ({FilteredData.length})</p>
    </div>
  );
}

export default ContactsList;
