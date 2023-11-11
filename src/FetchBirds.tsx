import { useState, useEffect } from "react";
import BirdsList from "./BirdsList";

const FetchBirds = () => {
  const [birds, setBirds] = useState(null);

  console.log("1");

  useEffect(() => {
    console.log("running here");
    fetch("http://localhost:8080/api/kiwis/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBirds(data);
      });
    console.log("use effect ran");
  }, []);

  return (
    <div className="list">
      <BirdsList birds={birds} />
    </div>
  );
};

export default FetchBirds;
