import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actressesArray, setActressesArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        setActressesArray(response.data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row g-3">
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
    </div>
  );
}

export default App;
