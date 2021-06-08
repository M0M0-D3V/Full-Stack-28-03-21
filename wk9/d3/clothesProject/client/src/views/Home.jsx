import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import ClothesList from "../components/ClothesList";
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
      <ClothesList clothes={clothes} setClothes={setClothes} />
    </>
  );
};

export default Home;
