import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../UI/Header";
import PlanItem from "../UI/PlanItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./PlanPage.scss";

function PlanPage() {
  const API = process.env.REACT_APP_API_KEY;

  const [item, setItem] = useState([
    {
      id: 1,
      name: "벤치프레스",
      target: "가슴",
    },
    {
      id: 2,
      name: "스쿼트",
      target: "하체",
    },
  ]);

  return (
    <div className="plan">
      <Header />
      <body>
        <section>
          <div className="list-container">
            <span>운동 종목</span>
            <div className="list-content">
              {item && item.map((item) => <PlanItem item={item} />)}
            </div>
          </div>

          <div className="plan-container">
            <span>운동 계획</span>
            <div className="plan-content"></div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default PlanPage;
