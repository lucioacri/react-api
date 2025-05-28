import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function App() {
  const [actressesArray, setActressesArray] = useState([]);
  const [actorsArray, setActorsArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        setActressesArray(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        setActorsArray(response.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row g-3">
        <h1>Actressess List</h1>
        {actressesArray.map((actress, index) => (
          <Card
            key={index}
            image={actress.image}
            name={actress.name}
            birthYear={actress.birth_year}
            nationality={actress.nationality}
            biography={actress.biography}
            awards={actress.awards}
          />
        ))}
      </div>
      <div className="row g-3">
        <h1>Actors List</h1>
        {actorsArray.map((actor, index) => (
          <Card
            key={index}
            image={actor.image}
            name={actor.name}
            birthYear={actor.birth_year}
            nationality={actor.nationality}
            biography={actor.biography}
            awards={actor.awards}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
