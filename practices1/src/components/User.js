/** @format */

import React from "react";
import PropTypes from "prop-types";
function User(props) {
  if (props.isLoggedId === false) {
    //early return example
    return <h1>Please log in</h1>;
  }

  return (
    <div>
      <h1>Name: {props.name}</h1>
      surname :{props.surname} <hr />
      age : {props.age}
      is logged in ?{props.isLoggedId ? "true" : "false"}
      <br />
      city : {props.adress.city}
      <br />
      country :{props.adress.country} - zip : {props.adress.zip}
      <br />
      {props.friends.map((friend, index) => (
        <div key={index} style={{ color: "red", alignSelf: "center" }}>
          {index}-{friend}
        </div>
      ))}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string, //Giving prop types
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), //giving multiple prop types
  isLoggedId: PropTypes.bool,
  friends: PropTypes.array.isRequired, //make it required
  adress: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    zip: PropTypes.number,
  }),
};
User.defaultProps = {
  name: "Meryem sohret Turaman", //giving default values
};
export default User;
