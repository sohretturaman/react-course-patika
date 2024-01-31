import React, { useState } from "react";
import styles from "./styles.module.css";
const Persons = [
  { name: "Jhon" },
  { name: "Dienna Marblemaw" },
  { name: "Jennifer" }
 
];

const PeopleList = () => {
  const [clickedIndex, setClickedIndex] = useState(true);

  const handleButtonClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Reset if clicked again
    } else {
      setClickedIndex(index); // Set the clicked index
    }
  };

  return (
    <div>
      <div>
        <h3>People</h3>
      </div>
      <br />
      {Persons.map((person, index) => (
        <div key={index}>
          <button
           style={{
            background: clickedIndex === index ? "white" : "#5346C4"
            ,
          color : clickedIndex === index ?'black' :"white"
          }}
            className={styles.button}
            onClick={() => handleButtonClick(index)}
           
          >
            {person.name}
          </button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
