import React from "react";

const Card = ({ id, myname, mail }) => {
  return (
    <div className="card">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <p>{myname}</p>
      <p>{mail}</p>
    </div>
  );
};

export default Card;
