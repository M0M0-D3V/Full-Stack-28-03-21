import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = ({ id, successCallBack }) => {
  const clickFunction = (id) => {
    axios
      .delete(`http://localhost:8000/api/clothes/${id}`)
      .then((res) => {
        // do something after delete
        console.log(res);
        successCallBack();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => clickFunction(id)}>Delete</button>
    </>
  );
};

export default DeleteButton;
