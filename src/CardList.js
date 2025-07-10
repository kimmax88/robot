import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  return (
    <div className="rebotsList">
      {robots.map((robot, index) => {
        return (
          <Card
            myname={robot.name}
            mail={robot.email}
            id={robot.id}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CardList;
