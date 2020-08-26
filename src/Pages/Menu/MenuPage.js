import React from "react";
import { useLocation } from "react-router-dom";

function MenuPage({}) {
  const search = useLocation().search;
  const tableNumber = new URLSearchParams(search).get("table");
  const restaurantId = new URLSearchParams(search).get("restaurantId");
  return (
    <div>
      <h3>Restaurant ID: {restaurantId}</h3>
      <h4>Table Number : {tableNumber} </h4>
    </div>
  );
}

export default MenuPage;
