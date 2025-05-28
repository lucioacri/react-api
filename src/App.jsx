import { useState, useEffect } from "react";
import axios from "axios";

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
          <div className="col-4" key={index}>
            <div className="card h-100">
              <img
                src={actress.image}
                alt={actress.name}
                className="card-img-top"
              />

              <div className="card-body">
                <div className="card-title">{actress.name}</div>
                <div className="card-subtitle mb-2 text-body-secondary">
                  {actress.birth_year}
                </div>
                <div className="card-text">
                  Nationality: {actress.nationality}
                </div>
                <div className="card-text">Biography: {actress.biography}</div>
                <div className="card-text">Awards: {actress.awards}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row g-3">
        <h1>Actors List</h1>
        {actorsArray.map((actor, index) => (
          <div className="col-4" key={index}>
            <div className="card h-100">
              <img
                src={actor.image}
                alt={actor.name}
                className="card-img-top"
              />

              <div className="card-body">
                <div className="card-title">{actor.name}</div>
                <div className="card-subtitle mb-2 text-body-secondary">
                  {actor.birth_year}
                </div>
                <div className="card-text">
                  Nationality: {actor.nationality}
                </div>
                <div className="card-text">Biography: {actor.biography}</div>
                <div className="card-text">Awards: {actor.awards}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
