import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/ParkingTable.css";

function ParkingTable() {
  const [park, setPark] = useState([]);

  function getParck() {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&rows=30&facet=grp_nom&facet=grp_statut"
      )
      .then((response) => response.data)
      .then((data) => {
        setPark(data.records);
      });
  }
  useEffect(() => {
    getParck();
  }, []);
  return (
    <div className="parkingtable">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>disponibilité</th>
            <th>Place libre</th>
          </tr>
        </thead>
        <tbody>
          {park.map((item) => (
            <tr className="parkingtable_rows">
              <td className="parkingtable_name">{item.fields.grp_nom}</td>
              {item.fields.grp_disponible > 20 ? (
                <td className="parkingtable_ok">ok</td>
              ) : (
                <td className="parkingtable_notok">no</td>
              )}
              <td className="parkingtable_available">
                {item.fields.grp_disponible}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParkingTable;
