import React from "react";

const CardComp = ({ type }: any) => {
  if (type === "cardComp1"){
    return (
      <div id="card-comp1" className="card-comp-container" >
          Cards
      </div>
    )
  } 
  if (type === "cardComp2"){
    return (
      <div id="card-comp2" className="card-comp-container" >
          Cards
      </div>
    )
  } 
};

export default CardComp;
