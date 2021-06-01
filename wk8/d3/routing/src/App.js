import { Router, Link, navigate } from "@reach/router";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/1")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // navigate("")
      })
      .catch((err) => console.log(err));
  }, []);

  let Home = () => <h1>Home</h1>;
  let Dash = () => <h1>Dash</h1>;

  const DetailDogComponent = ({ id, number, word, stuff }) => {
    // do some logic
    const style = {
      color: word,
    };
    return (
      <>
        <p style={style}>You are looking at the dog with id {id}</p>
      </>
    );
  };

  return (
    <>
      <h1>Hello</h1>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      <div>
        <p>name: {data.name}</p>
        <p>height: {data.height}</p>
        <p>mass: {data.mass}</p>
        <p>hair_color: {data.hair_color}</p>
      </div>
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
        <DetailDogComponent path="/dogs/:id/:number/:word/:stuff" />
      </Router>
    </>
  );
}

export default App;
