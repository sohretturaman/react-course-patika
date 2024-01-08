/** @format */

import "./App.css";
import User from "./components/User";

const name = "meryem";
const loggedIn = true;

function App() {
  const adress = {
    city: "istanbul",
    country: "turkey",
    zip: 3343,
  };
  return (
    <div className="App">
      {loggedIn ? <h1>Welcome {name}</h1> : <h1>Please log in</h1>}
      hello world
      <User
        surname="turaman"
        age={20}
        isLoggedId={true}
        friends={["ali", "veli", "ayse", "mehmet", "fatih"]}
        adress={adress}
      />
    </div>
  );
}

export default App;
