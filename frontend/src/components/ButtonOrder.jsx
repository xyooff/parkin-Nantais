import React from "react";
import "../css/ButtonOrder.css"

function ButtonOrder() {
  return (
    <div className="buttonOrder">
      <h2 className="buttonOrder_title">
        Pensez a réserver votre place de parking
      </h2>
      <button type="button" className="buttonOrder_button">
        Resever
      </button>
    </div>
  );
}

export default ButtonOrder;
