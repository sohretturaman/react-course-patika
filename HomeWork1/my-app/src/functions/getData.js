/** @format */

import axios from "axios";
const getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    resolve(data);
    reject("an error happened");
  });
};

const getPosts = (postId) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => {
        resolve(res.data);
        //console.log("post data in function", res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getData, getPosts };
