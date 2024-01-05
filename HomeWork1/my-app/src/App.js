/** @format */
import { getData, getPosts } from "./functions/getData";
function App() {
  /*  getData(1).then((data) => console.log("user after parse in app.js", data));

  getPosts(1).then((posts) =>
    console.log("posts after parse in app.js", posts)
  ); */
  Promise.all([getData(1), getPosts(1)]).then((data) => {
    console.log("data after parse in app.js", data);
  });

  return (
    <div>
      <h1>HomeWork1</h1>
      <p>hello world</p>
    </div>
  );
}

export default App;
