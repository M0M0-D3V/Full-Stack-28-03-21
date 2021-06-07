import axios from "axios";
import { navigate } from "@reach/router";
import { useState } from "react";

const New = (props) => {
  // 1. create variables and useState
  const [formInputs, setFormInputs] = useState({
    category: "",
    imgUrl: "",
    size: "",
    name: "",
    price: 0,
  });
  const [errors, setErrors] = useState([]);
  // formInputs.category;
  // 2. useEffect

  // 3. Other Functions
  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/clothes", formInputs)
      .then((res) => {
        console.log("sending res:", res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  const changeFunction = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  // 4. return
  return (
    <>
      <h1>Create New Clothing</h1>
      <form onSubmit={submitFunction}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <p>
          Category:
          <input
            type="text"
            name="category"
            value={formInputs.category}
            onChange={changeFunction}
          />
        </p>
        <p>
          imgUrl:
          <input
            type="text"
            name="imgUrl"
            value={formInputs.imgUrl}
            onChange={changeFunction}
          />
        </p>
        <p>
          Size:
          <input
            type="text"
            name="size"
            value={formInputs.size}
            onChange={changeFunction}
          />
        </p>
        <p>
          Name:
          <input
            type="text"
            name="name"
            value={formInputs.name}
            onChange={changeFunction}
          />
        </p>
        <p>
          Price:
          <input
            type="number"
            name="price"
            value={formInputs.price}
            onChange={changeFunction}
            min="0"
            step="0.01"
          />
        </p>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default New;
