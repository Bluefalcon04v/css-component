import React from "react";

const CardComp = ({ type }: any) => {
  if (type === "cardComp1"){
    return (
      <div id="card-comp1" className="card-comp-container" >
          Multicolor Border card
      </div>
    )
  } 
};

export default CardComp;
