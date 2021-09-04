import React from "react";
import "./PlanItem.scss";

function PlanItem({ item }) {
  const { id, target, name } = item;
  return (
    <div className="item-container" key={id}>
      <img alt="" />
      <div className="item-des">
        <div className="item-name">이름 : {name}</div>
        <div className="item-target">주동근 : {target}</div>
      </div>
    </div>
  );
}

export default PlanItem;
