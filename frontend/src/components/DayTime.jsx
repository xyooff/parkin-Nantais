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
        <h1 className="dayTime_title">Parking Nantais</h1>
        <p className="dayTime_nom">dispo :</p>
        <p>{clock()}</p>
      </div>
    </div>
  );
}

export default DayTime;
