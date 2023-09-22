import React from "react";
import "../index.css";
import { HistoryCard } from "../Components/HistoryCard";
import { useSelector, useDispatch } from "react-redux";

export const History = () => {
  const { sold } = useSelector((state) => state.sold);

  return (
    <div className="main">
      <h2 className="heading">Sell History:</h2>
      {sold.length === 0 ? (
        <h5 className="justify-content-center m-5"> No Products in Cart! </h5>
      ) : (
        sold.map((item) => <HistoryCard data={item} />)
      )}
    </div>
  );
};
