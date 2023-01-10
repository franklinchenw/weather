import { useState } from "react";
import { HeaderRow } from "../molecules/HeaderRow";

export const Weather = () => {
  const [switchOn, setSwitchOn] = useState(true);

  const test = () => {
    console.log(1234324);
  };

  return (
    <div className="container">
      <HeaderRow title={"Weather"} toggle={true} test={test}/>
      <div className="body">
        <div className="card favorite-location-card">
          <div className="card-title">Favorite Locations</div>
          <div className="favorite-list">locations...</div>
        </div>
        <div className="card weather-details-card">
          <div className="card-title">Name</div>
          <div>Details</div>
        </div>
      </div>
    </div>
  );
};
