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
    <ul>
      {actressesArray.map((actress, index) => (
        <li key={index}>{actress.id}</li>
      ))}
    </ul>
  );
}

export default App;
