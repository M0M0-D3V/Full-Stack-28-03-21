import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
const Home = (props) => {
  // 1. variables and useState
  const [clothes, setClothes] = useState([]);
  //   2. useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/clothes")
      .then((res) => {
        console.log("getting the stuff:", res);
        //   do something with res.data
        setClothes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // 3. other Functions needed

  // 4. Return
  return (
    <>
      <h1>Home</h1>
      {clothes.length > 0 &&
        clothes.map((clothing) => {
          return (
            <div key={clothing._id}>
              <p>Category: {clothing.category}</p>
              <p>Name: {clothing.name}</p>
              <p>Size: {clothing.size}</p>
              <p>Price: {clothing.price}</p>
              <img
                src={clothing.imgUrl}
                alt={clothing.name}
                style={{ width: "300px" }}
              />
              <Link to={`/edit/${clothing._id}`}>Edit</Link>
            </div>
          );
        })}
    </>
  );
};

export default Home;
