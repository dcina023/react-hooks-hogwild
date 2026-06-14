import React from "react";
import HogCards from "./HogCards";

function DisplayList({ hogs }) {
  return (
    <div className="indexWrapper">
      {hogs.map((hog) => (
        <HogCards key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default DisplayList;
