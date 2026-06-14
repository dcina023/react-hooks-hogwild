import React, { useState } from "react";
import DisplayList from "./DisplayList";

function HogCards({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="pigTile minPigTile">
      <h3 onClick={handleDetails} style={{ cursor: "pointer" }}>
        Title: {hog.name}
      </h3>
      <img
        src={hog.image}
        alt={hog.name}
        style={{ width: "100%", height: "75%", objectFit: "cover" }}
      />
      {showDetails && (
        <div className="normalText">
          <ul>
            <li>
              <strong>Speciality:</strong>
              {hog.specialty}
            </li>
            <li>
              <strong>Greased:</strong>
              {hog.greased ? "Yes" : "No"}
            </li>
            <li>
              <strong>Weight:</strong>
              {hog.weight} lbs
            </li>
            <li>
              <strong>Highest Medal:</strong>
              {hog["highest medal achieved"]}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HogCards;
