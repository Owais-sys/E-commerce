import React from "react";

export const HistoryCard = ({ data }) => {
  return (
    <div className="container m-4 ">
      <div className="row custom-row2  mx-5 mb-3">
        <div className="col-4">
          <img className="img" variant="top" src={data.image}></img>
        </div>
        <div className="desc col-4">
          <h5>{data.title}</h5>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
};
