import React from "react";
import "../css/DayTime.css";

function DayTime() {
  function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours} H ${minutes} M ${seconds}`;
  }
  return (
    <div className="dayTime">
      <div className="border">
        <img src="./src/assets/banniere.jpg" alt="banniere" />
        <h1 className="dayTime_title">Parking Nantais</h1>
        <div className="dayTime_doublep">
          <p className="dayTime_nom">dispo :</p>
          <p className="dayTime_nom">{clock()}</p>
        </div>
      </div>
    </div>
  );
}

export default DayTime;
