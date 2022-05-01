import React from "react";
import "../css/DayTime.css";
import DayJS from "react-dayjs";

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
      <h1 className="dayTime_title">Parking Nantais</h1>
      <p className="dayTime_nom">Nombre de place libre</p>
      <p>{clock()};</p>
    </div>
  );
}

export default DayTime;
