import { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";
import ClothesForm from "../components/ClothesForm";
const Edit = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    category: "",
    imgUrl: "",
    size: "",
    name: "",
    price: 0,
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/clothes/${id}`).then((res) => {
      console.log("got results", res);
      setFormInputs(res.data);
    });
  }, [id]);

  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/clothes/${id}`, formInputs)
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
  return (
    <>
      <h1>Edit Clothing: {id}</h1>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <ClothesForm
        formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        buttonText={"Edit"}
      />
      <DeleteButton id={id} successCallBack={() => navigate("/")} />
    </>
  );
};

export default Edit;
